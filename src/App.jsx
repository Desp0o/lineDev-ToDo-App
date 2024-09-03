import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect } from "react";
import { supabase } from "./supabaseConfig";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "react-query";

function App() {

  return (
    <>
      <SignedOut>
        <Routes>

        <Route path='/' element={<SignIn />} />
        </Routes>
      </SignedOut>


      <SignedIn>
        <Routes>
          
          <Route path="/" element={<Home />} />
        </Routes>
      </SignedIn>


    </>
  )
}

export default App
