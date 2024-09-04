import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import ToDoCard from '../components/ToDoCard'
import { supabase } from '../supabaseConfig'
import { useQuery } from 'react-query'
import { DateFormatter } from '../components/DateFormatter'
import AddTask from '../components/AddTask'
import { useUser } from '@clerk/clerk-react'
import Spinner from '../components/Spinner'

const Home = () => {
  const { user } = useUser()
  useEffect(() => {
    console.log(user.firstName);

  }, [])


  const fetchSupa = async () => {
    let { data, error } = await supabase.from("todos").select("*").eq("user_id", user.id)

    if (error) {
      console.log(error);

    }
    return data
  }


  useEffect(() => {
    fetchSupa()
  }, [])

  const { data, refetch, isLoading } = useQuery(['todos'], () => fetchSupa(), {
    staleTime: 50 * 1000 * 60
  })

  if (isLoading) {
    console.log(isLoading);

  }

  if (data) {
    console.log(data);

  }





  return (
    <Layout>
      <AddTask refetch={refetch} />
      <div className='grid lg:grid-cols-4 gap-[30px] grid-flow-dense mt-[56px]'>
        {isLoading ? <Spinner />
          : (
            data && data.length > 0 ? data.map((toDo, index) => {
              const rand = Math.floor(Math.random() * 4) + 1;
              return (
                <ToDoCard
                  key={index}
                  index={index}
                  text={toDo.description}
                  bg={rand}
                  date={<DateFormatter dateProp={toDo.created_at} />}
                  taskId={toDo.id}
                  complete={toDo.complate}
                  important={toDo.important}
                  refetch={refetch}
                />
              )
            }) : <p className='text-[20px] font-[900] text-center absolute top-1/2 left-1/2'>You Have no ToDos</p>
          )}

        {/* for padding bottom */}
      </div>
    </Layout>
  )
}

export default Home