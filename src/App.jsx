import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignedIn, SignedOut, SignIn, useAuth } from "@clerk/clerk-react";
import SSOCallback from "./pages/SsoCallback";
import ImportantPage from "./pages/ImportantPage";
import Spinner from "./components/Spinner";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const {isLoaded} = useAuth()

  if (!isLoaded) {
    return <Spinner />
  }


  return (
    <>
      <ToastContainer closeOnClick={true} />

      <Routes>
        <Route
          path="/"
          element={
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
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route path="/sso-callback" element={<SSOCallback />} />
        <Route path="/importants" element={<ImportantPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          }
        />
      </Routes>
    </>
  );
}

export default App;
