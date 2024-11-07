import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils/rapidapi';
import ReactLoading from "react-loading"


function WatchVideoContent() {
    const [video, setVideo] = useState([])  
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(null)  
    const { id } = useParams() 

    const fetchVideoDetail = async () => {
        try {
            setLoading(true)  
            const { data } = await fetchData(`video/info?id=${id}`)
            console.log(data)
            setVideo(data || null) 
        } catch (err) {
            setError('Failed to load video details')
            console.error(err)
        } finally {
            setLoading(false)  
        }
    }

    useEffect(() => {
        fetchVideoDetail()  
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

    if (!video) {
        return <div>No video found</div>
    }

    return (
        <section className=" flex justify-center flex-row h-[calc(100%-px)] mt-1  overflow-y-scroll overflow-x-hidden">
            <section className="w-full max-w-[1580px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
                    <div className="h-[800px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
                        <ReactPlayer
                            height="100%"
                            width="100%"
                            controls
                            style={{ backgroundColor: "#000000", borderRadius: "12px" }}
                            playing={true}
                        />
                    </div>
                    <div className="font-bold text-sm md:text-xl my-3 line-clamp-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-2">
                        <div className="flex ">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        className="h-[40px] w-[40px] overflow-hidden rounded-full"
                                        src={'https://via.placeholder.com/36x36'}
                                        alt="Author Avatar"

                                    />
                                </div>
                            </div>
                            <div className="flex space-x-5">
                                <div className="flex flex-col ml-3">
                                    <div className="text-md font-semibold flex items-center">
                                        NCT127
                                    </div>
                                    <div className=" text-sm">
                                        8.15 million follower
                                    </div>
                                </div>
                                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                                    Subscribe
                                </span>
                            </div>
                        </div>

                        {/* like */}
                        <div className="flex mt-4 md:mt-0 ">
                            <div className='w-[150px] h-[36px]  bg-[#F2F2F2] rounded-3xl '>
                                <div className="flex items-center ">
                                    <div className='flex items-center pr-1 h-[36px] w-[110px] rounded-l-3xl text-[14px] hover:bg-[#D9D9D9] cursor-pointer'>
                                        <img src='/images/watchvideo/like.svg' className=" w-[24px] h-[24px] ml-3" />
                                        <span className='ml-2'> 25k </span>
                                    </div>
                                    <div className='flex items-center border-l-2 h-[36px] w-[59px] hover:bg-[#D9D9D9] cursor-pointer rounded-r-3xl '>
                                        <div className=''>
                                            <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[10px] mt-[2px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center h-[36px] w-[91px]  rounded-3xl bg-[#F2F2F2] ml-3 hover:bg-[#D9D9D9] cursor-pointer'>
                                <img src='/images/watchvideo/share.svg' className="mr-2 w-[24px] h-[24px]" />
                                <span className='text-[14px] font-medium'>Share</span>
                            </div>
                            <div className='rounded-full bg-[#F2F2F2] h-[36px] w-[36px] ml-3 hover:bg-[#D9D9D9] cursor-pointer'>
                                <img src='/images/watchvideo/more.svg' className=" w-[24px] h-[24px] mx-[6px] my-[6px]" />
                            </div>
                        </div>

                    </div>


                    {/* description */}
                    <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm overflow-hidden">
                        <div className="flex font-semibold">
                            <span>
                                290K
                            </span>
                            <span className='ml-1'>
                                9 months ago
                            </span>
                        </div>
                        <span className='line-clamp-3'>
                        NCT 127 - Be There For Me #SBSGayoDaejeon 엔시티 127 -
                        Be There For Me # NCT127 #BeThereForMe

                        SBS #Inkigayo SBS GayoDaejeon(가요대전) is a Korean music program broadcast by SBS. The show features some of K-pop artists' performance every Sunday. Check out this week's Inkigayo Line up and meet your favorite artist! 🔗bit.ly/3epKoUp
                        </span>
                    </div>
                    <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
                        127 <p>Comments</p>
                        <div className='flex items-center cursor-pointer'>
                            <img src='/images/watchvideo/sortby.svg' className=" w-[24px] h-[24px mx-[6px]" />
                            <span className='text-[14px] font-medium'>Sort by</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mt-[24px] flex items-center '>
                            <img src='https://via.placeholder.com/36x36' className='rounded-full' />
                            <div className='border-b-2 w-[100%] ml-5'>
                                <div className='mb-1'>
                                    <span className='text-[14px] text-[#606060]'>Add a comment...</span>
                                </div>
                            </div>
                        </div>

                        {/* add comment */}
    
                        <div className='flex items-center mt-9 text-[14px] h-4 '>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://via.placeholder.com/36x36' className='rounded-full' />
                                <span className='ml-5 '>@marklee02</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>that's good</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                    <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>802</span>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[5px]'>
                                <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <div className=' ml-3 w-[67px] h-[28px] cursor-pointer hover:bg-[#F2F2F2] rounded-full'>
                            <span className='text-[12px] font-semibold mx-[9px] cursor-pointer'>respond</span>
                            </div>
                        </div>
                        <div className='flex items-center mt-9 text-[14px] h-4'>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://via.placeholder.com/36x36' className='rounded-full' />
                                <span className='ml-5 '>@marklee02</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>that's good</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                    <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>802</span>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[5px]'>
                                <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <div className=' ml-3 w-[67px] h-[28px] cursor-pointer hover:bg-[#F2F2F2] rounded-full'>
                            <span className='text-[12px] font-semibold mx-[9px] cursor-pointer'>respond</span>
                            </div>
                        </div>
                        <div className='flex items-center mt-9 text-[14px] h-4'>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://via.placeholder.com/36x36' className='rounded-full' />
                                <span className='ml-5 '>@marklee02</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>that's good</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                    <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>802</span>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[5px]'>
                                <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <div className=' ml-3 w-[67px] h-[28px] cursor-pointer hover:bg-[#F2F2F2] rounded-full'>
                            <span className='text-[12px] font-semibold mx-[9px] cursor-pointer'>respond</span>
                            </div>
                        </div>
                        <div className='flex items-center mt-9 text-[14px] h-4'>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://via.placeholder.com/36x36' className='rounded-full' />
                                <span className='ml-5 '>@marklee02</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>that's good</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                    <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>802</span>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[5px]'>
                                <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <div className=' ml-3 w-[67px] h-[28px] cursor-pointer hover:bg-[#F2F2F2] rounded-full'>
                            <span className='text-[12px] font-semibold mx-[9px] cursor-pointer'>respond</span>
                            </div>
                        </div>
                        
                    </div>
                </div>



                {/* suggestvideo */}
                <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)]  lg:w-[350px] xl:w-[400px]">
                    <div>
                        <div className='flex mb-3'>
                            <div className='thumb relative h-24 lg:h-24 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl'>
                                <img src='https://via.placeholder.com/168x94' />
                            </div>
                            <div className='detail flex flex-col ml-3 overflow-hidden'>
                                <div className='descri '>
                                    <span className="title lg:text-xs xl:text-sm font-bold line-clamp-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </span>
                                    <span className="channel text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2  flex items-center">
                                        NCT DREAM
                                    </span>
                                    <div className="view flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden">
                                        <span>
                                            127k views
                                        </span>
                                        <span className='ml-1 truncate'>
                                            • 7 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}


export default WatchVideoContent
