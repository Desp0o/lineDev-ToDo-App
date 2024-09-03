import React from 'react'
// import SignInButton from './SignInButton'
import { SignIn } from "@clerk/clerk-react";

const LoginForm = () => {

    return (
        <div className='w-full xl:w-[669px] h-auto text-primary px-[16px] pt-[72px] pb-[121px] xl:pb-[64px] xl:py-[64px] flex flex-col items-center
         bg-[#F6F6F7] xl:rounded-[15px]'>
            <SignIn appearance={{
                elements: {
                main: "flex flex-col-reverse",
                formFieldInput:"h-[56px]",
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