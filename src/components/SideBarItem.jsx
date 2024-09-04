import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarItem = ({path, icon, title}) => {
  return (
    <NavLink to={path} className='w-[252px] h-[48px] rounded-[4px] flex items-center pl-[16px] gap-[12px]'
    style={({ isActive }) => ({
      backgroundColor: isActive ? '#E7E8EA' : 'transparent',
    })}>
        {icon}
        <p className='text-[14px] leading-[16px]'>{title}</p>
    </NavLink>
  )
}

export default SideBarItem