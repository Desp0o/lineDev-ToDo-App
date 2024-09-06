import React from "react";
// import SignInButton from './SignInButton'
import { SignIn } from "@clerk/clerk-react";
import RegisterPage from "../../pages/RegisterPage";

const LoginForm = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          main: "flex flex-col-reverse",
          formFieldInput: "h-[38px]",
          card: "!bg-transparent",
          headerSubtitle: "hidden",
          socialButtonsBlockButton__google:
            "h-[38px] rounded-[30px] !border-[1px] !border-[#CFD3D9] hover:bg-transparent !shadow-none",
          formButtonPrimary:
            "bg-[#477EE7] h-[38px] rounded-[30px] hover:bg-slate-400 text-sm",
        },
      }}
    />
  );
};

export default LoginForm;
