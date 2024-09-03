import React from 'react'
import { calendarIcon } from '../assets/icons/calendar'
import { cardDots } from '../assets/icons/cardDots'

const ToDoCard = ({ date, text, bg }) => {
  return (
    <div
      className='w-[343px] lg:w-[252px] px-[16px] py-[12px] rounded-[10px] flex flex-col gap-[22px]
                   hover:drop-shadow-[1px_1px_6px_rgba(0,0,0,0.25)] transition-all'
      style={{
        backgroundColor:
          bg === 1 ? "#FBF0E4" :
            bg === 2 ? "#FCE4F5" :
              bg === 3 ? "#E7E4FC" :
                bg === 4 ? "#FCE4E4" :
                  "#E4F6FC"
      }}
    >
      {/* top section */}
      <div className='flex flex-col gap-[16px]'>
        <div
          className='flex gap-[10px] items-center px-[14px] py-[4px] bg-black w-fit rounded-[30px]'
          style={{ backgroundColor: "#F1F5FE" }}
        >
          {calendarIcon}
          <p className='text-[14px] leading-[20px]'>{date}</p>
        </div>
        <p className='text-[14px] leading-[20px]'>{text}</p>
      </div>

      <span className='w-[24px] h-[24px] place-self-end cursor-pointer'>{cardDots}</span>
    </div>
  )
}

export default ToDoCard