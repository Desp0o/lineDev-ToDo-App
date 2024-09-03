import React, { useEffect } from 'react'
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
          { user_id: user.id, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", complate: false, important: true }
        ]
      ).select()

    console.log(error);
    refetch()

  }


  return (
    <Layout>
      <button onClick={writeTodo}>click</button>
      <div className='grid grid-cols-4 grid-flow-row-dense lg:gap-[24px]'>
        {data && data.map((toDo, index) => {
          const rand = Math.floor(Math.random() * 4) + 1;
          return (
            <div key={index} className='w-[252px] mb-[24px]'>
              <ToDoCard text={toDo.description} bg={rand} date={<DateFormatter dateProp={toDo.created_at}/>}/>
            </div>
          )
        })}

        {/* for padding bottom */}
        <div className='h-[50px] w-full'></div>
      </div>
    </Layout>
  )
}

export default Home