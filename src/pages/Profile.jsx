import React, { useContext } from 'react'
import { userContext } from '../main'
import Loader from '../components/Loader';


const Profile = () => {

  const { user, loading}  = useContext(userContext);



  return loading? (<Loader/>): (
    <div className='m-5'>
      <h1 className='text-5xl '>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}

export default Profile