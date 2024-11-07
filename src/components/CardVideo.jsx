import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number';


function CardVideo({ video }) {
    useEffect(() =>
        console.log(video), [])
    if (!video.thumbnail || !video.channelThumbnail) 
        return null
    
    
    return (
        <div className='card '>
            <Link to={`/watch/${video.videoId}`}>
                <div className='flex'>
                    <div className='thumb relative hover:rounded-none duration-200 overflow-hidden'>
                        {video.thumbnail && video.thumbnail.length > 0 ? (
                            <img src={video.thumbnail[0].url} alt="Thumbnail" />
                        ) : (
                            <span>No Thumbnail Available</span>
                        )}
                        <span className=' absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-sx rounded-md'>{video.lengthText}</span>
                    </div>
                </div>
                <div className='detail'>
                    <div className='channel-img'>
                        {video.channelThumbnail && video.channelThumbnail.length > 0 ? (
                            <img src={video.channelThumbnail[0].url} alt="Channel Thumbnail" />
                        ) : (
                            <span>No Thumbnail Available</span>
                        )}
                    </div>
                    <div className='descri '>
                        <div className="title">
                            {video.title}
                        </div>
                        <div className="channel flex items-center">
                            {video.channelTitle}
    
                        </div>
                        <div className="view">
                            <span>
                                {`${abbreviateNumber(
                                    video.viewCount, 2
                                )} views`}
                            </span>
                            <span className='ml-1'>
                                • {video.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}


export default CardVideo