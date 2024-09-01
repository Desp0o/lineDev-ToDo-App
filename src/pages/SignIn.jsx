import React, {useState } from 'react'
import LogoComp from '../components/signInComps/LogoComp'
import InputComp from '../components/InputComp'
import SignInButton from '../components/signInComps/SignInButton'


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='text-primary px-[16px] pt-[72px] pb-[px-121px] flex flex-col items-center gap-[48px]'>
            {/* logo and title */}
            <LogoComp />

            {/* user and pwd inputs */}
            <form className='w-full flex flex-col gap-[16px] items-center'>
                <InputComp
                    name='email'
                    placeholder='Enter your username or Email'
                    type='text'
                    value={email}
                    setSetter={setEmail}
                />

                <InputComp
                    name='password'
                    placeholder='Enter your Password'
                    type='password'
                    value={password}
                    setSetter={setPassword}
                />

                <div className='w-full mt-[14px] flex flex-col gap-[24px]'>
                    <p className='text-[14px] text-left'>Forgot password?</p>

                    <SignInButton />
                </div>
            </form>
        </div>
    )
}

export default SignIn