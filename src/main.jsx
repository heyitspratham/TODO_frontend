import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const server = 'https://todo-app-oc27.onrender.com/api/v1'

export const userContext = createContext()

const AppWrapper = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return(
  <userContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
    <App />
  </userContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)
