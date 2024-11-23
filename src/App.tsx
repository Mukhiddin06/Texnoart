import { useState } from 'react'
import './App.css'
import LoginRoutes from './routes/LoginRoutes'
import DashboardRoutes from './routes/DashboardRoutes'

function App() {
  const [token, _setToken] = useState(null)

  if(token){
    return  <DashboardRoutes/> 
  }else{
    return <LoginRoutes/>
  }
}

export default App
