import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginForm = () => {
  return (
    <div className="xl:min-w[400px]">
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
    </div>
  );
};

export default LoginForm;
