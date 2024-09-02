import React from 'react'
import Navbar from '../components/Navbar'
import AddTask from '../components/AddTask'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='pt-[88px] w-full flex flex-col items-center'>
      
      <div className=''>
        <AddTask />
      </div>
    </div>
    </>
  )
}

export default Home