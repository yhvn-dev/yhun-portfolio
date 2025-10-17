import React,{useState,useEffect} from 'react'
import axios from "axios";

export default function GithubStats({username}) {
  const [data,setData] = useState(null);
  const [error,setError] = useState("");

    // GET DATA FROM GITHUB
  useEffect(() => {
    if(!username) return
        const fetchData = async () =>{
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`)
                setData(response.data)   
            } catch (error) {
                setError(error)
            }
        };
    fetchData()
  },[username])

 
  if(error) return <div>Error:{error.message}</div>
  if(!data) return <div>Error:Loading.....</div>

  return (
    <div>

        <h3>{data.login}</h3>
        <p>Followers: {data.followers}</p>
        <p>Public repos: {data.public_repos}</p>
        <p>
            Profile: <a href={data.html_url} target="_blank" rel="noreferrer">{data.html_url}</a>
        </p>

    </div>
  )

}
