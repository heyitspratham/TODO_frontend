import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { server, userContext } from '../main'
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Header = () => {

  const {isAuthenticated, setIsAuthenticated, loading, setLoading} = useContext(userContext);

  const logoutHandler = async (e) => {
    setLoading(true)

    try {
      await axios.get(`${server}/user/logout`,{
        withCredentials: true
      }
      )
      
      toast.success("Logout Successfull")
      setIsAuthenticated(false);
      setLoading(false)
    } catch (error) {
      toast.error("error occured")
      console.log(error);
      setIsAuthenticated(true);
      setLoading(false)
    }
    
  };

  // console.log(isAuthenticated);
  return (
    <div className='bg-gray-700 flex  items-center justify-between w-screen px-5 ' >
        <h2 className='text-white font-bold text-xl py-3' >TODO APP.</h2>
        <article class='flex justify-between w-[20%] h-full py-1 mr-6  text-white '>
            <Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/"} >Home</Link>
            <Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/profile"} >Profile</Link>
            {
              isAuthenticated?<Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/login"} onClick={logoutHandler} >Logout</Link>:<Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/login"} >Login</Link>
            }
        </article>
    </div>
  )
}

export default Header