import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[100px]'>
    <span className='absolute animate-spin'><AiOutlineLoading3Quarters size={75}/></span>
  </div>
}

export default Spinner
