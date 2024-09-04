import React, { useEffect } from 'react'
import { burgerMenu } from '../assets/icons/burgerMenu'
import { searchIcon } from '../assets/icons/searchIcon'
import { userIcon } from '../assets/icons/userIcon'
import imgAvatar from "../assets/images/avatar.jpeg"
import SearchComp from './SearchComp'
import { dropDownIcon } from '../assets/icons/DropDownIcon'
import { RedirectToUserProfile, UserButton} from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const { user } = useUser()
  const navigate = useNavigate()

  const redirectToProfile = () => {
    navigate('/profile')
  }

  return (
    <div className='bg-[#F6F6F7] w-full h-[56px] lg:h-[68px] border-b-[1px] px-[16px] lg:px-[40px] py-[8px] box-border flex items-center justify-between fixed z-[99] lg:relative'>
        <span className='lg:hidden'>{burgerMenu}</span>
        <SearchComp />

        {/* avatar */}
        <div className='flex itmes-center ml-[47px] lg:ml-[0px]'>
            <div className='hidden lg:flex flex items-center gap-[10px] mr-[14px] cursor-pointer'>
                <p>EN</p>
                {dropDownIcon}
            </div>
           <UserButton appearance={
            {
              elements:{
                avatarBox: "h-[44px] w-[44px]",
                userButtonPopoverFooter: "hidden",
                cardBox: "!h-[30rem]"
              }
            }
           }/>
        </div>

        {/* search | avatar */}
        <div className='flex items-center gap-[18px] lg:hidden'>
            <span>{searchIcon}</span>
            <span className='h-[16px] w-[1px] bg-[#82868F]' />
            <span onClick={redirectToProfile}>{userIcon}</span>
        </div>
    </div>
  )
}

export default Navbar