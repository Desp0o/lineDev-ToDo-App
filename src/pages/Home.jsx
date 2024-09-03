import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ToDoCard from '../components/ToDoCard'
import { supabase } from '../supabaseConfig'
import { data } from 'autoprefixer'
import { useQuery } from 'react-query'
import { useUser } from '@clerk/clerk-react'

const Home = () => {

  const { user } = useUser()

  const fetchSupa = async () => {
    let { data } = await supabase.from("todos").select("*")
    return data
  }


  useEffect(() => {
    fetchSupa()
  }, [])

  const { data, refetch, isLoading } = useQuery(['todos'], () => fetchSupa())

  if (isLoading) {
    console.log(isLoading);

  }

  if (data) {
    console.log(data);

  }


  async function writeTodo(params) {
    const { data, error } = await supabase.from('todos')
      .insert(
        [
          { user_id: user.id, description: 'test', complate: false, important: true }
        ]
      ).select()

    console.log(error);
    refetch()

  }


  return (
    <Layout>
      <button onClick={writeTodo}>click here</button>
      <div className='h-full lg:columns-4 lg:gap-[24px]'>

        {data && data.map((toDo, index) => {
          return (
            <div key={index} className='mb-[24px]'>
              <ToDoCard

              />
            </div>

          )
        })}
      </div>
    </Layout>
  )
}

export default Home