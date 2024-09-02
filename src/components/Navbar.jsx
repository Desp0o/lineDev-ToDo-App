import React from 'react'
import { burgerMenu } from '../assets/icons/burgerMenu'
import { searchIcon } from '../assets/icons/searchIcon'
import { userIcon } from '../assets/icons/userIcon'
import imgAvatar from "../assets/images/avatar.jpeg"
import SearchComp from './SearchComp'
import { dropDownIcon } from '../assets/icons/DropDownIcon'

const Navbar = () => {
  return (
    <div className='absolute w-full h-[56px] lg:h-[68px] border-b-[1px] px-[16px] lg:px-[40px] py-[8px] box-border flex items-center justify-between'>
        <span className='lg:hidden'>{burgerMenu}</span>
        <SearchComp />

        {/* avatar */}
        <div className='flex itmes-center ml-[47px] lg:ml-[0px]'>
            <div className='hidden lg:flex flex items-center gap-[10px] mr-[14px] cursor-pointer'>
                <p>EN</p>
                {dropDownIcon}
            </div>

            <img src={imgAvatar} alt='user avatar' className='w-[40px] h-[40px] rounded-full' />
        </div>

        {/* search | avatar */}
        <div className='flex items-center gap-[18px] lg:hidden'>
            <span>{searchIcon}</span>
            <span className='h-[16px] w-[1px] bg-[#82868F]' />
            <span>{userIcon}</span>
        </div>
    </div>
  )
}

export default Navbar