import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        
        <div className='w-full h-screen grid grid-cols-[1fr] lg:grid-cols-[290px_1fr] grid-rows-[56px_1fr] lg:grid-rows-[68px_1fr]'>

            <div className='hidden lg:block col-start-1 row-start-1 row-end-3'>
                <Sidebar />
            </div>
            
            <div className='col-start-1 lg:col-start-2 row-start-1'>
                <Navbar />
            </div>

            <div className='relative col-start-1 lg:col-start-2 pt-[32px] px-[16px] lg:px-[30px]'>
                {children}
            </div>

        </div>
    )
}

export default Layout
