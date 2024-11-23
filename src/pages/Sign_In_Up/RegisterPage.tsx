import { Button, Input } from "antd"
import axios from "axios"
import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

interface LoginType {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  password: string
}

const RegisterPage = () => {
  const navigate = useNavigate()
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data: LoginType = {
      first_name,
      last_name,
      phone_number,
      email,
      password
    }
    try {
      const response = await axios.post("https://texnoark.ilyosbekdev.uz/auth/admin/sign-up", data);
      if (response) {
        toast.success('Successfully registered!')
        setTimeout(() => navigate("/"), 800 )
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(`${error}`)
    }
  }

  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
      <div className="w-[500px] mx-auto mt-20">
        <h2 className="text-[30px] leading-[50px] font-bold text-center mb-[30px]">Sign Up</h2>
        <form onSubmit={handleSubmit} className="p-5 rounded-lg bg-slate-300 space-y-5">
          <Input value={first_name} onChange={(e) => setFirstName(e.target.value)} variant="outlined" type="text" placeholder="Enter your First Name" size="large" />
          <Input value={last_name} onChange={(e) => setLastName(e.target.value)} variant="outlined" type="text" placeholder="Enter your Last Name" size="large" />
          <Input value={phone_number} onChange={(e) => setPhone(e.target.value)} variant="outlined" type="text" placeholder="Enter your Phone number" size="large" />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" type="text" placeholder="Enter your Email" size="large" />
          <Input value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" type="password" placeholder="Enter your Password" size="large" />
          <Button htmlType="submit" type="primary" size="large" className="w-full">Sign In</Button>
        </form>
      </div>
    </>
  )
}

export default RegisterPage