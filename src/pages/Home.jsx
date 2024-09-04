import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ToDoCard from '../components/ToDoCard'
import { DateFormatter } from '../components/DateFormatter'
import AddTask from '../components/AddTask'
import Spinner from '../components/Spinner'
import FetchData from '../functions/FetchData'

const Home = () => {

  const { data, isLoading, refetch} = FetchData()

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