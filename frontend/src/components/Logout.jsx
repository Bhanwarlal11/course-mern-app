import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {

    const {} = useAuth()
  return (
    <div>
        <button className='px-3 py-2 text-white bg-red-500 rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout
