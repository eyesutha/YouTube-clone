import React, { useState } from 'react'
import PlayingVideo from '../components/PlayingVideo'
import Navbar from '../components/Navbar'
import WatchVideoContent from '../components/Contents/WatchVideoContent'
import Sidebar from '../components/Sidebar/Sidebar'

function WatchVideo() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState)
    }

    const ModeOverlay = () => {
                return (
                    <div className='flex fixed top-0 right-0 bottom-0 left-[228px] bg-black/50 z-30 h-[100vh]'
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        
                    </div>
                )
            }
    return (
        <section className='grid h-[100vh] w-[100%] grid-rows-[56px_1fr]'>
            <div>
                <Navbar toggleSidebar={toggleSidebar} />
                <div className={`${isSidebarOpen ? 'block' : 'hidden'} fixed bg-white z-40 h-[100vh]`}>

                <Sidebar isOpen={isSidebarOpen} />
                </div>

            </div>
            <div className='overflow-x-hidden overflow-y-scroll h-[cal(100vh-6.625rem)]'>
                {/* <WatchVideoContent /> */}
                <PlayingVideo />
            </div>
            {isSidebarOpen ? <ModeOverlay/> : null}
        </section>
    )
}

export default WatchVideo






