import { createContext, useState, useContext } from "react";

// ✅ create the context
const GithubContext = createContext();

// ✅ create the provider component
export function GithubProvider({ children }) {
   const [stats, setStats] = useState({
    user: null,
    repos: [],
    totalCommits: 0
  });

  return (
    <GithubContext.Provider value={{ stats, setStats }}>
      {children}
    </GithubContext.Provider>
  );
}


// ✅ custom hook to use the context
export function useGithub() {
  return useContext(GithubContext);
}
