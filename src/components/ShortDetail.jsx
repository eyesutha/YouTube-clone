import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidapi';

function ShortDetail () {
    const [video, setVideo] = useState ([])
    const { id } = useParams()
    useEffect(() => {
        fetchVideoDetail()
    }, [])

    const fetchVideoDetail = async () => {
        try {
            const data = await fetchData(`shorts/info?id=${id}`)
            console.log(data)
            setVideo(data || [])
        } catch (error) {
            console.error("Error fetching video details:", error)
        }
    }

    return (
        <div className='flex mt-2 overflow-y-scroll overflow-x-hidden flex-col gap-5'>
            <div className='flex gap-3 justify-center'>
                <div className='relative flex items-start justify-end flex-col rounded-[12px] overflow-hidden'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        height="793px"
                        width="446px"
                        controls
                        style={{ backgroundColor: "#000000" }}
                        playing={true}
                    />
                </div>
                <div className='flex flex-col text-center justify-end gap-7'>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full '>
                        <img src='/images/shortvideo/like.svg' className=" w-[24px] h-[24px] m-auto " />
                        <div className='mt-3 '>
                            <span className='text-[12px]'>{video.likeCountText}</span>
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
                            <span className='text-[12px] '>{video.commentCount}</span>
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
                    <div>
                        {video.channelThumbnail && video.channelThumbnail.length > 0 ? (
                            <img src={video.channelThumbnail[0].url} alt="Channel Thumbnail" 
                            className='w-[36px] h-[36px] rounded-md cursor-pointer'/>
                        ) : (
                            <span>No Thumbnail Available</span>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-center'>
                <div className='relative flex items-start justify-end flex-col  rounded-[12px] overflow-hidden'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=fqf2LumlPTI`}
                        height="793px"
                        width="446px"
                        controls
                        style={{ backgroundColor: "#000000"}}
                        playing={false}
                    />
                </div>
                <div className='flex flex-col text-center justify-end gap-7'>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full '>
                        <img src='/images/shortvideo/like.svg' className=" w-[24px] h-[24px] m-auto " />
                        <div className='mt-3 '>
                            <span className='text-[12px]'>{video.likeCountText}</span>
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
                            <span className='text-[12px] '>{video.commentCount}</span>
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
                    <div>
                        {video.channelThumbnail && video.channelThumbnail.length > 0 ? (
                            <img src={video.channelThumbnail[0].url} alt="Channel Thumbnail" 
                            className='w-[36px] h-[36px] rounded-md cursor-pointer'/>
                        ) : (
                            <span>No Thumbnail Available</span>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-center'>
                <div className='relative flex items-start justify-end flex-col rounded-[12px] overflow-hidden'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=S6i5QS1RAEU`}
                        height="793px"
                        width="446px"
                        controls
                        style={{ backgroundColor: "#000000", borderRadius: "30px" }}
                        playing={false}
                    />
                </div>
                <div className='flex flex-col text-center justify-end gap-7'>
                    <div className='w-[48px] h-[48px] cursor-pointer hover:bg-[#D9D9D9] py-[12px] bg-[#F2F2F2] rounded-full '>
                        <img src='/images/shortvideo/like.svg' className=" w-[24px] h-[24px] m-auto " />
                        <div className='mt-3 '>
                            <span className='text-[12px]'>{video.likeCountText}</span>
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
                            <span className='text-[12px] '>{video.commentCount}</span>
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
                    <div>
                        {video.channelThumbnail && video.channelThumbnail.length > 0 ? (
                            <img src={video.channelThumbnail[0].url} alt="Channel Thumbnail" 
                            className='w-[36px] h-[36px] rounded-md cursor-pointer'/>
                        ) : (
                            <span>No Thumbnail Available</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortDetail
