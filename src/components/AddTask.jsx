import React from 'react'
import { plusIcon } from '../assets/icons/plusIcon'

const AddTask = () => {
    return (
        <div className='h-[48px] w-full rounded-[8px] px-[14px] py-[10px] shadow-taskShadow flex items-center gap-[6px] cursor-pointer'>
           {plusIcon} AddTask</div>
    )
}

export default AddTask