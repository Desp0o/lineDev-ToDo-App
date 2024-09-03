import React, { useEffect, useState, useRef } from 'react'
import { calendarIcon } from '../assets/icons/calendar'
import { cardDots } from '../assets/icons/cardDots'
import ToDoCardSettings from './ToDoCardSettings'

const ToDoCard = ({ date, text, bg, index }) => {

  const [activeIndex, setActiveIndex] = useState(null)
  const settingRef = useRef()

  useEffect(()=>{

    const handler = (e) =>{
      if(settingRef.current){

        if(!settingRef.current.contains(e.target)){
          setActiveIndex()
        }
      }
    }

    document.addEventListener("mousedown", handler)
  },[])

  const handleSettings = () => {
    if(index === activeIndex){
      setActiveIndex(null)
    }else{
      setActiveIndex(index)
    }
  }

  return (
    <div className='relative group/card'>
      <div
        className='relative w-[343px] lg:w-[252px] px-[16px] py-[12px] rounded-[10px] flex flex-col gap-[22px]
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
            style={{
              backgroundColor:
                bg === 1 ? "#FDF8F2" :
                  bg === 2 ? "#FDF2FA" :
                    bg === 3 ? "#F3F1FD" :
                      bg === 4 ? "#FDF1F1" :
                        "#F1FAFD"
            }}
          >
            {calendarIcon}
            <p className='text-[14px] leading-[20px]'>{date}</p>
          </div>
          <p className='text-[14px] leading-[20px]'>{text}</p>
        </div>

        <span onClick={handleSettings} className='visible lg:invisible group-hover/card:lg:visible w-[24px] h-[24px] place-self-end cursor-pointer flex items-center justify-center'>{cardDots}</span>
      </div>

      {activeIndex === index && (
            <div className="absolute -bottom-[160px] left-[30px] z-10 group/card" ref={settingRef}>
              <ToDoCardSettings />
            </div>
          )}

    </div>
  )
}

export default ToDoCard