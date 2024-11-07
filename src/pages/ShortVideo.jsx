import React, { useState } from 'react'
import ShortVideoContent from '../components/Contents/ShortVideoContent'
import Navbar from '../components/Navbar'
import ShortDetail from '../components/ShortDetail'
import Sidebar from '../components/Sidebar/Sidebar'

function ShortVideo() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState)
    }
    return (
        <section className='grid h-[100vh] w-[100%]'>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className='flex h- overflow-x-hidden overflow-y-scroll w-full'>
                <Sidebar isOpen={isSidebarOpen} />
                <div className='m-auto '>
                    <ShortDetail />
                    {/* <ShortVideoContent/> */}
                </div>
            </div>


        </section>
    )
}

export default ShortVideo
