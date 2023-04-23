import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { server, userContext } from '../main'
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post(`${server}/user/login`, {
        name,
        email,
        password
      },{
        headers:{
          "Content-Type": "application/json",
        },
        withCredentials: true
      }
      )
      
      toast.success(data.message)
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("error occured")
      console.log(error);
      setIsAuthenticated(false);
    }
    
  };

  if(isAuthenticated) return <Navigate to={"/"}/>

  return (
    <div className=' '>
       <form className='flex flex-col items-center my-11' onSubmit={submitHandler}>
       <input
          className="border border-gray-400 m-3 w-[50%] p-2 text-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <input
          className="border border-gray-400 m-3 w-[50%] p-2 text-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button className='bg-gray-700 text-white w-[16%] text-lg my-5 p-2' type='submit' >Login</button>
        <h4>Or</h4>
        <Link className='my-5' to={"/register"}>Sign Up</Link>
       </form> 
    </div>
  )
}

export default Login