import React, {useState} from 'react'
import InputComp from '../InputComp'
import LogoComp from './LogoComp'
// import SignInButton from './SignInButton'
import { googleAuthIcon } from '../../assets/icons/googelAuthIcon'
import { SignedIn, SignedOut, SignInButton, UserButton, SignIn } from "@clerk/clerk-react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='w-full xl:w-[669px] h-auto text-primary px-[16px] pt-[72px] pb-[121px] xl:pb-[64px] xl:py-[64px] flex flex-col items-center
         bg-[#F6F6F7] xl:rounded-[15px]'>
            {/* logo and title */}
            {/* <LogoComp /> */}

            {/* user and pwd inputs */}
           
            

            <SignIn appearance={{
                elements: {
                card:"!bg-transparent",
                headerSubtitle: "hidden",
                socialButtonsBlockButton__google: 'h-[56px] rounded-[30px] !border-[1px] !border-[#CFD3D9] hover:bg-transparent !shadow-none',
                formButtonPrimary: 'bg-[#477EE7] h-[56px] rounded-[30px] hover:bg-slate-400 text-sm',
                },
            }} />
        </div>
    )
}

export default LoginForm