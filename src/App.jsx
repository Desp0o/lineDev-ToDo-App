import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
