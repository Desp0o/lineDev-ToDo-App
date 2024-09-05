import { Routes, Route, NavLink } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import SSOCallback from "./pages/SsoCallback";
import ImportantPage from "./pages/ImportantPage";

function App() {

  return (
    <>
      <ToastContainer closeOnClick={true} />
      <Routes>

        <Route path="/" element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <Login />
            </SignedOut>
          </>
        }
        />
        <Route path="/dashboard" element={<SignedIn><Dashboard /></SignedIn>} />
        <Route path="/sso-callback" element={<SSOCallback />} />
        <Route path="/factor-one" element={<SSOCallback />} />
        <Route path="/importants" element={<ImportantPage />} />
      </Routes>
    </>
  )
}

export default App
