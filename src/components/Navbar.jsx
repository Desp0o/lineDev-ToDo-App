import React from 'react'
import { burgerMenu } from '../assets/icons/burgerMenu'
import { searchIcon } from '../assets/icons/searchIcon'
import { userIcon } from '../assets/icons/userIcon'
import imgAvatar from "../assets/images/avatar.jpeg"

const Navbar = () => {
  return (
    <div className='absolute w-full h-[56px] border-b-[1px] px-[16px] py-[8px] box-border flex items-center justify-between'>
        <span>{burgerMenu}</span>
        <img src={imgAvatar} alt='user avatar' className='w-[40px] h-[40px] rounded-full ml-[47px]' />

        {/* search | avatar */}
        <div className='flex items-center gap-[18px]'>
            <span>{searchIcon}</span>
            <span className='h-[16px] w-[1px] bg-[#82868F]' />
            <span>{userIcon}</span>
        </div>
    </div>
  )
}

export default Navbar