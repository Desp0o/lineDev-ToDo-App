import React from 'react'
import { starIcon } from '../assets/icons/starIcon'
import { completeIcon } from '../assets/icons/completeIcon'
import { editIcon } from '../assets/icons/editIcon'
import { deleteIcon } from '../assets/icons/deleteIcon'

const ToDoCardSettings = () => {
    return (
        <div className='h-[172px] w-[188px] bg-[#F6F6F7] px-[14px] py-[8px] rounded-[8px]
                    flex flex-col gap-[4px]'>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer'>
                <span>{starIcon}</span>
                <p>Importance</p>
            </div>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer'>
                <span>{completeIcon}</span>
                <p>Complete</p>
            </div>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer'>
                <span>{editIcon}</span>
                <p>Edit</p>
            </div>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer'>
                <span>{deleteIcon}</span>
                <p>Delete</p>
            </div>

        </div>
    )
}

export default ToDoCardSettings