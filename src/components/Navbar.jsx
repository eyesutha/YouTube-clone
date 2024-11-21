import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar({ toggleSidebar }) {

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const searchQueryHandle = (event) => {
    if((event.key === "Enter" || event === "searchButton") && searchQuery.length > 0) {
      navigate(`search/${searchQuery}`)
      setSearchQuery("")
    }
  }

  return (
    <section className='my-2 px-[16px] overflow-auto '>
      <div className=''>
        <div className='flex justify-between '>
          <div className='nav-left grid grid-cols-[40px_1fr] items-center h-[100%]'>
            <div className='h-[40px] w-[40px] flex p-[8px] hover:bg-[#F2F2F2] rounded-full cursor-pointer m-auto'
              onClick={toggleSidebar}>
              <img src='/images/yticon/sidebar.svg' className='w-[24px] h-[24px]' />
            </div>
            <div>
              <Link to="/">
                <img src='/images/yticon/logo.svg' className='w-[97px] h-[20px] ml-2' />
              </Link>
            </div>
          </div>


          <div className='nav-center w-[732px] grid grid-cols-[640px_40px] justify-end items-center'>
            <div className='h-[40px] w-[100%] grid grid-cols-[auto_64px] justify-end items-center'>
              <div className='grid w-[514px] h-[100%] grid-cols-[auto] items-center border-2 border-r-0 rounded-[40px_0px_0px_40px] overflow-hidden'>
                <input type='text' placeholder='Search' className='w-[100%] h-[100%] bg-transparent border-none pl-5 outline-none text-sm' 
                onChange={(e) => setSearchQuery (e.target.value)}
                onKeyUp={searchQueryHandle}
                value={searchQuery}
                />
              </div>
              <div className='flex h-[100%] w-[100%] items-center justify-center bg-[#F8F8F8] border-2  rounded-[0px_40px_40px_0px] hover:bg-[#F2F2F2] cursor-pointer'>
                <button onClick={() => searchQueryHandle("searchButton")}>
                  <img src='/images/yticon/search.svg' className='w-[20px] h-[20px] justify-items-center ' />
                </button>
              </div>
            </div>
            <div className='items-center justify-center flex w-[40px] h-[40px] bg-[#F2F2F2] rounded-full  ml-4 hover:bg-[#D9D9D9] cursor-pointer'>
              <button className=''>
                <img src='/images/yticon/microphone.svg' className='w-[24px] h-[24px] m-auto ' />
              </button>
            </div>
          </div>


          <div className='nav-right grid justify-end items-center '>
            <div className='flex justify-center items-center grid-cols-3 gap-6 mr-4'>
              <div className='flex hover:bg-[#F2F2F2] rounded-full cursor-pointer w-[40px] h-[40px] m-auto p-[8px]'>
                <img src='/images/yticon/createvideo.svg' className='w-[24px] h-[24px]' />
              </div>
              <div className='relative flex hover:bg-[#F2F2F2] rounded-full cursor-pointer w-[40px] h-[40px] m-auto p-[8px]'>
                <img src='/images/yticon/notification.svg' className='w-[24px] h-[24px]' />
                <span className='absolute bottom-4 left-4 text-xs bg-red-600 rounded-full px-1 text-white '>9+</span>
              </div>
              <div className='cursor-pointer'>
                <img src='/images/yticon/profile.svg' className='w-[30px] h-[27px]' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Navbar
