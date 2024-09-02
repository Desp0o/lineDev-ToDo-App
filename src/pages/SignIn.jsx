import React from 'react'
import LoginForm from '../components/signInComps/LoginForm'
import LoginPageCardComp from '../components/signInComps/LoginPageCardComp'
import Pattern from '../components/signInComps/Pattern'


const SignIn = () => {

    return (
       <div className='w-full h-screen flex items-center gap-[175px] pl-[66px] pr-[45px]'>
        <LoginForm />
        <Pattern />
       </div>
    )
}

export default SignIn