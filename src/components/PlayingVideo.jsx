import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidapi'
import ReactPlayer from 'react-player'
import { abbreviateNumber } from 'js-abbreviation-number'
import SuggestVideo from './SuggestVideo'

function PlayingVideo() {

    const [video, setVideo] = useState([])
    const [relativeVideo, setRelativeVideo] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetchVideoDetail()
        fetchRelatedVideo()
    }, [id])

    const fetchVideoDetail = async () => {
        try {
            const data = await fetchData(`video/info?id=${id}`)
            console.log(data);
            setVideo(data || [])
        } catch (error) {
            console.error("Error fetching video details:", error)
        }
    }

    const fetchRelatedVideo = async () => {
        try {
            const { data } = await fetchData(`related?id=${id}`)
            console.log(data);
            setRelativeVideo(data || [])
        } catch (error) {
            console.error("Error fetching video details:", error)
        }
    }

    return (
        <section className=" flex justify-center flex-row h-[calc(100%-px)] mt-1  overflow-y-scroll overflow-x-hidden">
            <section className="w-full max-w-[1580px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
                    <div className="h-[800px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0 rounded-[12px] overflow-hidden">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            height="100%"
                            width="100%"
                            controls
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
                    </div>
                    <div className="font-bold text-sm md:text-xl my-3 line-clamp-2">
                        {video?.title}
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-2">
                        <div className="flex ">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    {/* {video.channelThumbnail && video.channelThumbnail.length > 0 ? (
                                        <img src={video?.channelThumbnail[0]?.url} alt="Channel Thumbnail" />
                                       
                                    ) : (
                                        <span>No Thumbnail Available</span>
                                    )} */}
                                     <img src='https://yt3.ggpht.com/0eZ0gU_5POSmcPDmkrct9o8cAudWeFaA2S_baXYsrAWedevotUEIosZkQlKeCf14go9Ca4qYM9Y=s88-c-k-c0x00ffffff-no-rj' alt="Channel Thumbnail" />
                                </div>
                            </div>
                            <div className="flex space-x-5">
                                <div className="flex flex-col ml-3">
                                    <div className="text-md font-semibold flex items-center">
                                        {video?.channelTitle}
                                    </div>
                                    <div className=" text-sm">
                                        {video.subscriberCountText || '12.7m subscribers'}
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
                                        <span className='ml-2'>
                                            {`${abbreviateNumber(
                                                video.viewCount, 2
                                            )}`} </span>
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
                                {`${abbreviateNumber(
                                    video.viewCount, 2
                                )} views`}
                            </span>
                            <span className='ml-1'>
                                {video.publishedTimeText || "6 days ago"}
                            </span>
                        </div>
                        <span className='line-clamp-3'>
                            {video.description}
                        </span>
                    </div>
                    <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
                        {video.commentCount || 24}<p>Comments</p>
                        <div className='flex items-center cursor-pointer'>
                            <img src='/images/watchvideo/sortby.svg' className=" w-[24px] h-[24px mx-[6px]" />
                            <span className='text-[14px] font-medium'>Sort by</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mt-[24px] flex items-center '>
                            <img src='https://yt3.ggpht.com/ytc/AIdro_mNaigllPTS0VGvL6CIM1-qYta1Jia3kbOIspUdunbnwU2ZHwtdSk_eGWUIUEyi_o2HN1p2pB_B=s88-c-k-c0x00ffffff-no-rj' className='w-[36px] h-[36px] rounded-full' />
                            <div className='border-b-2 w-[100%] ml-5'>
                                <div className='mb-1'>
                                    {/* <span className='text-[14px] text-[#606060]'>Add a comment...</span> */}
                                    <input type='text' placeholder='Add comment...' className='text-[14px] w-full text-[#606060 outline-0'></input>
                                </div>
                            </div>
                        </div>

                        {/* add comment */}

                        <div className='flex items-center mt-9 text-[14px] h-4 '>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://yt3.ggpht.com/J1WY0tJTAM6ZC9jJUF5CtHbwk3f-ieeUI64l8WhEp1MNGr05uz2ozCGlLTITDezE1qN7nfCq=s68-c-k-c0x00ffffff-no-rj' className='rounded-full h-[36px] w-[36px]' />
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
                                <img src='https://yt3.ggpht.com/7gQsq9xP2tElCv80Y0xdKIEdJ6WD0SrBjEKFg7BYBbcMOPPklmxyuUS_lB2CBOfJ64yoGamh=s88-c-k-c0x00ffffff-no-rj' className='rounded-full h-[36px] w-[36px]' />
                                <span className='ml-5 '>@jungmark</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>Wowwww!!</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>192</span>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[5px]'>
                                <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <div className=' ml-3 w-[67px] h-[28px] cursor-pointer hover:bg-[#F2F2F2] rounded-full'>
                                <span className='text-[12px] font-semibold mx-[9px] cursor-pointer'>respond</span>
                            </div>
                        </div>
                        <div className='flex items-center mt-9 text-[14px] h-4'>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://yt3.googleusercontent.com/AeK_loTOAwvh8z4lddJeG8J-WIs3xMaVZ-qsedMUNjZ9KwE5-etKaLj22tFEfUckeUer5n8YGg=s160-c-k-c0x00ffffff-no-rj' className='rounded-full h-[36px] w-[36px]' />
                                <span className='ml-5 '>@jeno23</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>멋있어요!!</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>232</span>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[5px]'>
                                <img src='/images/watchvideo/unlike.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <div className=' ml-3 w-[67px] h-[28px] cursor-pointer hover:bg-[#F2F2F2] rounded-full'>
                                <span className='text-[12px] font-semibold mx-[9px] cursor-pointer'>respond</span>
                            </div>
                        </div>
                        <div className='flex items-center mt-9 text-[14px] h-4'>
                            <div className='flex items-center cursor-pointer'>
                                <img src='https://yt3.ggpht.com/lUREeSeDIPVaqY1Wy7qs6fPlJtZd_KIGWoAIujr_1F5ZTdlZFgtPoboMfu9UJtGrX5ctiMFGz2Y=s68-c-k-c0x00ffffff-no-rj' className='rounded-full h-[36px] w-[36px]' />
                                <span className='ml-5 '>@na13</span>
                                <span className='ml-2 text-[#606060]'>7 months ago</span>
                            </div>
                        </div>
                        <span className='ml-[60px] text-[14px]'>so cool!!</span>
                        <div className='flex ml-[50px] items-center h-10'>
                            <div className='w-[32px] h-[32px] cursor-pointer hover:bg-[#F2F2F2] rounded-full py-[2px]'>
                                <img src='/images/watchvideo/like.svg' className="w-[24px] h-[24px] ml-[4px]" />
                            </div>
                            <span className='text-[12px] text-[#606060] m-[-8px] mx-2 '>132</span>
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
                    {
                        relativeVideo?.map((item, index) => {

                            if (item.type !== "video") return false;
                            return <SuggestVideo key={index} video={item} />;
                        })
                    }
                </div>
            </section>
        </section>
    );
}

export default PlayingVideo