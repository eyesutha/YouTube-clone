import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from '../components/Contents/Content'



function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState)
    }
    return (
        <section className='home h-[100vh] w-[100%] overflow-x-hidden'>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex w-full">
                <Sidebar isOpen={isSidebarOpen} />
                <Content />
            </div>
        </section>
    )
}

export default Home



