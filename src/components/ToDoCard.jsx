import React from 'react'
import { calendarIcon } from '../assets/icons/calendar'
import { cardDots } from '../assets/icons/cardDots'

const ToDoCard = ({date, text }) => {
  return (
    <div 
        className='w-[343px] px-[16px] py-[12px] rounded-[10px] flex flex-col gap-[22px]
                   hover:drop-shadow-[1px_1px_6px_rgba(0,0,0,0.25)] transition-all'
        style={{backgroundColor:"#E3EBFC"}}
    >
        {/* top section */}
        <div className='flex flex-col gap-[16px]'>
        <div 
            className='flex gap-[10px] items-center px-[14px] py-[4px] bg-black w-fit rounded-[30px]'
            style={{backgroundColor: "#F1F5FE"}}
        >
            {calendarIcon}
            <p className='text-[14px] leading-[20px]'>5/03/2024</p>
        </div>
        <p className='text-[14px] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        <span className='w-[24px] h-[24px] place-self-end cursor-pointer'>{cardDots}</span>
    </div>
  )
}

export default ToDoCard