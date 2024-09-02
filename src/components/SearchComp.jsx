import React, { useState } from 'react'
import { bigSearchIcon } from '../assets/icons/BigSearchIcon'

const SearchComp = () => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

  return (
    <div className='hidden lg:flex w-[460px] h-[40px] relative'>
        <span className='absolute left-[14px] top-[9px]'>{bigSearchIcon}</span>
        <input 
            type='text' 
            name='search' 
            value={searchValue} 
            onChange={handleSearchValue}
            placeholder='Search' 
            className='w-full h-full pl-[44px] rounded-[8px] bg-[#E7E8EA] placeholder:text-black placeholder:text-[14px]'/> 
    </div>
  )
}

export default SearchComp