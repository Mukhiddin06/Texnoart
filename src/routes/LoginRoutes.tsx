import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

const LoginRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    </div>
  )
}

export default LoginRoutes