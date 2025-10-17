// hooks/useGithubStats.js
import { useEffect } from "react";
import axios from "axios";
import { useGithub } from "../Context/githubContext";
import cachedStats from "../services/githubStats.json";

export function GithubStats({ username }) {
  const { setStats } = useGithub();

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        };
        
        // ✅ use headers here
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`, {headers}),
          axios.get(`https://api.github.com/users/${username}/repos`, {headers})
        ]);

        const user = userResponse.data;
        const repoList = reposResponse.data;

        const commitsCounts = await Promise.all(
          repoList.map(async (repo) => {
            try {
              const commitsRes = await axios.get(
                `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
                { headers }
              );
              const linkHeader = commitsRes.headers.link;
              if (linkHeader) {
                const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                return match ? parseInt(match[1]) : commitsRes.data.length;
              } else {
                return commitsRes.data.length;
              }
            } catch {
              return 0;
            }
          })
        );

        const total = commitsCounts.reduce((acc, count) => acc + count, 0);

        setStats({
          user,
          repos: repoList,
          totalCommits: total,
          error: ""
        });
      } catch (err) {
        console.log(err);
      
        setStats((prev) => ({
          ...prev,
          error: err.message
        }));
      }
    };

    fetchData();
  }, [username, setStats]);

  return null;
}
