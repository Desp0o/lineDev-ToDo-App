import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import ToDoCard from '../components/ToDoCard'
import { supabase } from '../supabaseConfig'
import { useQuery } from 'react-query'
import { useUser } from '@clerk/clerk-react'
import { DateFormatter } from '../components/DateFormatter'

const Home = () => {

  const { user } = useUser()

  const fetchSupa = async () => {
    let { data } = await supabase.from("todos").select("*")
    return data
  }


  useEffect(() => {
    fetchSupa()
  }, [])

  const { data, refetch, isLoading } = useQuery(['todos'], () => fetchSupa(),{
    staleTime: 50 * 1000 * 60
  })

  if (isLoading) {
    console.log(isLoading);

  }

  if (data) {
    console.log(data);

  }


const writeTodo = async () => {
    const { data, error } = await supabase
      .from('todos')
      .insert(
        [
          { user_id: user.id, description: "ტესტ", complate: false, important: true }
        ]
      ).select()

    console.log(error);
    // refetch()

  }


  return (
    <Layout>
      <button onClick={writeTodo}>click</button>
      <div className='grid lg:grid-cols-4 gap-[30px] grid-flow-dense	'>
        {data && data.map((toDo, index) => {
          const rand = Math.floor(Math.random() * 4) + 1;
          return (
              <ToDoCard 
                key={index}
                index={index}
                text={toDo.description} 
                bg={rand} 
                date={<DateFormatter dateProp={toDo.created_at}/>}
              />
          )
        })}

        {/* for padding bottom */}
      </div>
    </Layout>
  )
}

export default Home