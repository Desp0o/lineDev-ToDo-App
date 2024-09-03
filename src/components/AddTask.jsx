import React, { useState } from 'react'
import { plusIcon } from '../assets/icons/plusIcon'
import { addTask } from '../functions/AddFunction'
import { useUser } from '@clerk/clerk-react'

const AddTask = ({refetch}) => {

    const [value, setValue] = useState('')
    const { user } = useUser()

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='mx-auto relative h-[48px] w-[343px] lg:w-[570px] rounded-[8px] px-[14px] py-[10px] shadow-taskShadow flex items-center gap-[6px]'>
           <span onClick={()=>addTask(user.id, value, refetch)} className='absolute left-[20px] w-[24px] h-[24px] flex items-center justify-center cursor-pointer'>{plusIcon}</span>
           <input 
            className='pl-[34px] w-full'     
            type='text'
            value={value} 
            onChange={handleValue} 
            placeholder='Add a task'/>
        </div>
    )
}

export default AddTask