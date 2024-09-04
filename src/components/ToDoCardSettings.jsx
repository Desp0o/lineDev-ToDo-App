import React from 'react'
import { starIcon } from '../assets/icons/starIcon'
import { completeIcon } from '../assets/icons/completeIcon'
import { editIcon } from '../assets/icons/editIcon'
import { deleteIcon } from '../assets/icons/deleteIcon'
import CompleteFunction from '../functions/CompleteFunction'
import { UseDeleteTask } from '../functions/DeleteFunction'
import UseImportance from '../functions/UseImportance'

const ToDoCardSettings = ({taskId, complete, refetch, important}) => {
    const deleteTask = UseDeleteTask()
    const completeRow = CompleteFunction()
    const makeImportant = UseImportance()

    return (
        <div className='h-[172px] w-[188px] bg-[#F6F6F7] px-[14px] py-[8px] rounded-[8px]
                    flex flex-col gap-[4px]'>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer' onClick={() => makeImportant(taskId, important, refetch)}>
                <span>{starIcon}</span>
                <p>Importance</p>
            </div>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer' onClick={()=> completeRow(taskId, complete, refetch)}>
                <span>{completeIcon}</span>
                <p>Complete</p>
            </div>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer'>
                <span>{editIcon}</span>
                <p>Edit</p>
            </div>

            <div className='h-[34px] flex gap-[12px] items-center cursor-pointer' onClick={()=>deleteTask(taskId, refetch)}>
                <span>{deleteIcon}</span>
                <p>Delete</p>
            </div>

        </div>
    )
}

export default ToDoCardSettings