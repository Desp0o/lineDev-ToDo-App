import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return <span className='absolute top-1/2 left-1/2 animate-spin'><AiOutlineLoading3Quarters size={75}/></span>
}

export default Spinner
