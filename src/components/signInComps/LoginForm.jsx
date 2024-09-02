import React, {useState} from 'react'
import InputComp from '../InputComp'
import LogoComp from './LogoComp'
import SignInButton from './SignInButton'
import { googleAuthIcon } from '../../assets/icons/googelAuthIcon'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='w-full xl:w-[669px] h-auto text-primary px-[16px] pt-[72px] pb-[121px] xl:pb-[64px] xl:py-[64px] flex flex-col items-center
         bg-[#F6F6F7] xl:rounded-[15px]'>
            {/* logo and title */}
            <LogoComp />

            {/* user and pwd inputs */}
            <form className='w-[343px] xl:w-[476px] flex flex-col gap-[16px] items-center mt-[48px]'>
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
                    <p className='text-[14px] text-left cursor-pointer'>Forgot password?</p>

                    <SignInButton />
                </div>
            </form>

            <div className='mt-[32px] flex flex-col gap-[32px] items-center'>
                {/* divider */}
                <div className='w-[343px] xl:w-[476px] flex items-center gap-[10px]'>
                    <div className='w-full h-[1px] bg-[#CFD3DA]' />
                    <p className='text-[14px]'>OR</p>
                    <div className='w-full h-[1px] bg-[#CFD3DA]' />
                </div>

                {/* google button */}
                <button className='w-full h-[56px] border-[1px] border-[#CFD3D9] rounded-[30px] flex items-center justify-center gap-[12px]'>
                    {googleAuthIcon}
                    <p className='text-[14px]'>Sign in with google</p>
                </button>

                <p className='text-[14px]'>Don't have an account?<span className='text-[14px] font-[500] underline cursor-pointer'>Sign up</span></p>
            </div>
        </div>
    )
}

export default LoginForm