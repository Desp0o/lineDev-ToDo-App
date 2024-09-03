import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect } from "react";
import { supabase } from "./supabaseConfig";
import { useUser } from "@clerk/clerk-react";
function App() {
  const {user} = useUser()
  useEffect(()=>{
    

    if(user){
      getCountries()
      console.log(user.id);
    }
    
  },[user])

  const getCountries = async () => {
    let { data: todos, error } = await supabase.from('todos').select('*').eq("user_id", user.id).range(0, 9);

    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log(todos);
    }
}


async function writeTodo(params) {
  const {data, error} = await supabase.from('todos')
    .insert(
      [
        {user_id: user.id, description:'test', complate: false, important: true}
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
