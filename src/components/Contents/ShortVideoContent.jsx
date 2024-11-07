import React, { useEffect, useState } from 'react'
import ShortDetail from '../ShortDetail'
import { fetchData } from '../../utils/rapidapi'
import { useParams } from 'react-router-dom'
import ReactLoading from "react-loading"

function ShortVideoContent() {
    const [shortDetail, setShortDetail] = useState([])  
    const [loading, setLoading] = useState(true)  
    const [error, setError] = useState(null)  
    const { id } = useParams() 

    const fetchVideoDetail = async () => {
        try {
            setLoading(true) 
            const { data } = await fetchData(`shorts/info?id=${id}`)  
            console.log(data)
            setShortDetail(data || null) 
        } catch (error) {
            setError('Failed to load video details')  
            console.error("Error fetching video details:", error)
        } finally {
            setLoading(false)  
        }
    }

    useEffect(() => {
        if (id) {
            fetchVideoDetail()  
        }
    }, [id])  

    if (loading) {
        return (
            <div className="h-[900px] flex justify-center items-center m-auto">
              <ReactLoading type="spin" color="grey" />
            </div>
            )
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!shortDetail) {
        return <div>No video found</div>
    }


    return (
        <div className='flex mt-2 overflow-y-scroll overflow-x-hidden flex-col gap-5'>

            {
                shortDetail.map((item) => (
                    <ShortDetail key={item.videoId} video={item} />
                ))
            }
            <div className='flex gap-3 justify-center'>
                <div className='relative flex items-start justify-end flex-col'>
                    <img src='https://via.placeholder.com/446x793' className='rounded-xl' />
                    <div className='absolute flex ml-4 flex-col mb-5'>
                        <div className='flex items-center'>
                            <img src='https://via.placeholder.com/32x32' className='rounded-full cursor-pointer border-2' />
                            <span className='text-[14px] text-white ml-2 font-semibold'>@Jeno</span>
                            <button className='w-[65px] h-[30px] text-[14px] bg-white rounded-full ml-2'>
                                follow
                            </button>
                        </div>
                        <div className='overflow-hidden mt-2'>
                            <span className='text-[14px] text-white font-semibold line-clamp-2'>#music #nct127 #nctdream</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-center justify-end gap-7'>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full '>
                        <img src='/images/shortvideo/like.svg' className=" w-[24px] h-[24px] m-auto " />
                        <div className='mt-3 '>
                            <span className='text-[12px]'>1.5K</span>
                        </div>
                    </div>
                    <div className=' w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/unlike.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>unlike</span>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/comment.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>27</span>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/share.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>Share</span>
                        </div>
                    </div>
                    <div className=' w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/watchvideo/dotmenu.svg' className=" w-[24px] h-[24px] m-auto" />
                    </div>
                    <img src='https://via.placeholder.com/38x38' className=' rounded-md cursor-pointer' />
                </div>
            </div>
            <div className='flex gap-3 justify-center'>
                <div className='relative flex items-start justify-end flex-col'>
                    <img src='https://via.placeholder.com/446x793' className='rounded-xl' />
                    <div className='absolute flex ml-4 flex-col mb-5'>
                        <div className='flex items-center'>
                            <img src='https://via.placeholder.com/32x32' className='rounded-full cursor-pointer border-2' />
                            <span className='text-[14px] text-white ml-2 font-semibold'>@Jeno</span>
                            <button className='w-[65px] h-[30px] text-[14px] bg-white rounded-full ml-2'>
                                follow
                            </button>
                        </div>
                        <div className='overflow-hidden mt-2'>
                            <span className='text-[14px] text-white font-semibold line-clamp-2'>#music #nct127 #nctdream</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-center justify-end gap-7'>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full '>
                        <img src='/images/shortvideo/like.svg' className=" w-[24px] h-[24px] m-auto " />
                        <div className='mt-3 '>
                            <span className='text-[12px]'>1.5K</span>
                        </div>
                    </div>
                    <div className=' w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/unlike.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>unlike</span>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/comment.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>27</span>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/share.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>Share</span>
                        </div>
                    </div>
                    <div className=' w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/watchvideo/dotmenu.svg' className=" w-[24px] h-[24px] m-auto" />
                    </div>
                    <img src='https://via.placeholder.com/38x38' className=' rounded-md cursor-pointer' />
                </div>
            </div>
            <div className='flex gap-3 justify-center'>
                <div className='relative flex items-start justify-end flex-col'>
                    <img src='https://via.placeholder.com/446x793' className='rounded-xl' />
                    <div className='absolute flex ml-4 flex-col mb-5'>
                        <div className='flex items-center'>
                            <img src='https://via.placeholder.com/32x32' className='rounded-full cursor-pointer border-2' />
                            <span className='text-[14px] text-white ml-2 font-semibold'>@Jeno</span>
                            <button className='w-[65px] h-[30px] text-[14px] bg-white rounded-full ml-2'>
                                follow
                            </button>
                        </div>
                        <div className='overflow-hidden mt-2'>
                            <span className='text-[14px] text-white font-semibold line-clamp-2'>#music #nct127 #nctdream</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-center justify-end gap-7'>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full '>
                        <img src='/images/shortvideo/like.svg' className=" w-[24px] h-[24px] m-auto " />
                        <div className='mt-3 '>
                            <span className='text-[12px]'>1.5K</span>
                        </div>
                    </div>
                    <div className=' w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/unlike.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>unlike</span>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/comment.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>27</span>
                        </div>
                    </div>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/shortvideo/share.svg' className=" w-[24px] h-[24px] m-auto" />
                        <div className='mt-3 '>
                            <span className='text-[12px] '>Share</span>
                        </div>
                    </div>
                    <div className=' w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full'>
                        <img src='/images/watchvideo/dotmenu.svg' className=" w-[24px] h-[24px] m-auto" />
                    </div>
                    <img src='https://via.placeholder.com/38x38' className=' rounded-md cursor-pointer' />
                </div>
            </div>


        </div>
    )
}

export default ShortVideoContent
