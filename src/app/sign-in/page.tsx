"use client"
import Link from "next/link"
import { useState } from "react"

const LoginPage = () => {
  const [user,setUser]=useState("")
  console.log(user)
  const userHandler=(event:any)=>{
    event.preventDefault();
    setUser(event.target.value)
}

  return (
    <div className='w-72 h-[320px] bg-[#CFCEFF] flex items-center rounded-3xl flex-col'> 
       <h1 className="text-[25px] text-white mt-1">Sign In</h1>
       <div className="">
       <div className="flex flex-col mb-5">
              <label className="label" >User</label>
              <select className="h-8" onChange={userHandler}>
                <option value="">--Please choose an option--</option>
                <option value="parent">Parent</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select></div> 
             <div className="flex flex-col ">
             <label>Password</label>
             <input className="h-8" type="password"/>
             </div>
              <Link className="button" href={`/${user}`} >Sign In</Link>
       </div>
    </div>
  )
}

export default LoginPage