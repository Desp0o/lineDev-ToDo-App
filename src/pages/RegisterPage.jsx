import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const RegisterPage = () => {
  return(
    <div className='w-full h-screen flex items-center justify-center'>
         <SignUp appearance={{
          elements:{
            button: "h-[38px] rounded-[30px]",
            formFieldInput: "rounded-[30px]"
          }
         }}/>
    </div>
  )
}

export default RegisterPage