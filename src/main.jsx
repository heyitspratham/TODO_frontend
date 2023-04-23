import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const server = 'https://todo-app-oc27.onrender.com/api/v1'

export const userContext = createContext()

const AppWrapper = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  return(
  <userContext.Provider value={{isAuthenticated, setIsAuthenticated, loading, setLoading,user, setUser}}>
    <App />
  </userContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)
