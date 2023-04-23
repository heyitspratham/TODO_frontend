import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../main'

const Header = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(userContext);

  

  // console.log(isAuthenticated);
  return (
    <div className='bg-gray-700 flex  items-center justify-between w-full px-5 ' >
        <h2 className='text-white font-bold text-xl py-3' >TODO APP.</h2>
        <article class='flex justify-between w-[20%] h-full py-1 mr-6  text-white '>
            <Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/"} >Home</Link>
            <Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/profile"} >Profile</Link>
            {
              isAuthenticated?<Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/login"} >Logout</Link>:<Link className='hover:bg-white hover:text-black py-2 px-7 text-lg' to={"/login"} >Login</Link>
            }
        </article>
    </div>
  )
}

export default Header