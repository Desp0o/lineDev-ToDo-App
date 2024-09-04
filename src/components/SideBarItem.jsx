import React from 'react'
import { Link } from 'react-router-dom'

const SideBarItem = ({path, icon, title}) => {
  return (
    <Link to={path} className='w-[252px] h-[48px] rounded-[4px] flex items-center pl-[16px] gap-[12px]'>
        {icon}
        <p className='text-[14px] leading-[16px]'>{title}</p>
    </Link>
  )
}

export default SideBarItem