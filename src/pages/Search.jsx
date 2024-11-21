import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import SearchContent from '../components/Contents/SearchContent'


function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState)
  }
  return (
    <section className='grid h-[100vh] w-[100%] '>
      <div className=''>
      <Navbar toggleSidebar={toggleSidebar}/>
      </div>
      <div className='flex overflow-x-hidden overflow-y-scroll w-full'>
        <Sidebar isOpen={isSidebarOpen} />
          <SearchContent />
          {/* <SearchDetail /> */}
      
      </div>


    </section>
  )
}

export default Search
