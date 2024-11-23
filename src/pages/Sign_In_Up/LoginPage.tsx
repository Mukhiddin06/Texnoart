import { Button, Input } from "antd"
import axios from "axios"
import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

interface LoginType {
  phone_number: string
  password: string
}

const LoginPage = () => {
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data: LoginType = {
      phone_number,
      password
    }
    try {
      const response = await axios.post("https://texnoark.ilyosbekdev.uz/auth/sign-in", data);
      if (response) {
        toast.success('Successfully login!')
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(`${error}`)
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[500px] mx-auto mt-20">
        <h2 className="text-[30px] leading-[50px] font-bold text-center mb-[30px]">Sign In</h2>
        <form onSubmit={handleSubmit} className="p-5 rounded-lg bg-slate-300 space-y-5">
          <Input value={phone_number} onChange={(e) => setPhone(e.target.value)} variant="outlined" type="text" placeholder="Enter your Phone number" size="large" />
          <Input value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" type="password" placeholder="Enter your Password" size="large" />
          <Button htmlType="submit" type="primary" size="large" className="w-full">Sign In</Button>
        </form>
      </div>
    </>
  )
}

export default LoginPage