import React, { useState } from 'react'
import SearchComp from './SearchComp'

const ResponsiveSearch = () => {
  return (
<div className="fixed z-[9] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[0px]">
<SearchComp />
    </div>
  )
}

export default ResponsiveSearch