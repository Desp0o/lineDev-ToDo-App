import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const RegisterPage = () => {
  return(
    <div className='w-full h-screen flex items-center justify-center'>
         <SignUp />
    </div>
  )
}

export default RegisterPage