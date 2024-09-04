import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        
        <div className='w-full h-screen lg:pl-[290px] pt-[56px]'>

            <div className='hidden lg:flex fixed top-0 left-0 bottom-0 z-[99]'>
                <Sidebar />
            </div>
            
            <div className='fixed top-0 left-0 right-0 z-[98]'>
                <Navbar />
            </div>

            <div className='relative pt-[32px] px-[16px] lg:px-[30px] pb-[50px] lg:pb-[100px]'>
                {children}
            </div>

        </div>
    )
}

export default Layout
