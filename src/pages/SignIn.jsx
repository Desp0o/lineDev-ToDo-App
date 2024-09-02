import React from 'react'
import LoginForm from '../components/signInComps/LoginForm'
import Pattern from '../components/signInComps/Pattern'


const SignIn = () => {

    return (
        <div className='w-full xl:h-screen flex xl:items-center gap-[175px] xl:pl-[66px] xl:pr-[45px]'>
            <Pattern />
            <LoginForm />
        </div>
    )
}

export default SignIn