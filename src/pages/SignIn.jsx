import React, { useEffect } from 'react'
import LoginForm from '../components/signInComps/LoginForm'
import Pattern from '../components/signInComps/Pattern'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    

    return (
        <div className='w-full xl:h-screen flex xl:items-center gap-[175px] xl:pl-[66px] xl:pr-[45px] overflow-hidden
        2xl:w-[1440px] 2xl:items-center 2xl:justify-center 2xl:mx-auto'>
            <Pattern />
            <LoginForm />
        </div>
    )
}

export default SignIn