import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import ImportantPage from "./pages/ImportantPage";
import Spinner from "./components/Spinner";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return <Spinner />;
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

        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            }
          />
          <Route
            path="/importants"
            element={
              <SignedIn>
                <ImportantPage />
              </SignedIn>
            }
          />
        </Route>

        <Route
          path="/sign-up"
          element={
            <SignedOut>
              <RegisterPage />
            </SignedOut>
          }
        />
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
