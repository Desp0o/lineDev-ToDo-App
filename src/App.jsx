import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect } from "react";
import { supabase } from "./supabaseConfig";

function App() {
  useEffect(()=>{
    getCountries()
  },[])

  async function getCountries() {
    let { data } = await supabase.from("todos").select('*');
    console.log(data);
    
  }

async function writeTodo(params) {
  const {data, error} = await supabase.from('todos')
    .insert(
      [
        {some_column: 'someValue', other_column:'otherValue'}
      ]
    ).select()

    console.log(error);
    
}



  return (
    <>
    <button onClick={writeTodo}>click here</button>
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
