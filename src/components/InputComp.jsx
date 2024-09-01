import React, { useState } from 'react'

const InputComp = ({type, name, placeholder, value, setSetter}) => {


    const handleValue = (e) => {
        setSetter(e.target.value)
    }

  return (
    <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={handleValue}
        placeholder={placeholder} 
        className='
            w-full 
            h-[56px] 
            rounded-[12px] 
            border-[1px] 
            border-[#E6E8EB] 
            pl-[16px]
            placeholder:text-placeholder
            '
    />
  )
}

export default InputComp