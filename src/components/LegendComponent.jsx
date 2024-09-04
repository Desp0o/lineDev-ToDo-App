import React from 'react'

const LegendComponent = ({color, status}) => {
  return (
    <div className='flex items-center gap-[14px]'>
        <div className='w-[24px] h-[24px] rounded-full' style={{backgroundColor: color}}/>
        <p className='leading-[20xp] text-[14px]'>{status}</p>
    </div>
  )
}

export default LegendComponent