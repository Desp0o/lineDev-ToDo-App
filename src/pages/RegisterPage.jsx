import { SignUp } from '@clerk/clerk-react'

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