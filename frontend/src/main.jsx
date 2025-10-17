import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GithubProvider } from './Context/githubContext.jsx'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GithubProvider>
    <App />
      </GithubProvider>
  </StrictMode>,
)
