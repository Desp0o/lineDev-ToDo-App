import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { dark, light,  } from '@clerk/themes'

import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Profile from "./pages/Profile";

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
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </SignedIn>


    </>
  )
}

export default App
