import { abbreviateNumber } from 'js-abbreviation-number';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SearchDetail({ video }) {
  useEffect(() =>
    console.log(video), [video])
  if (!video) {
    return <div>No video data available</div>
  }

  return (
    <div>
      <Link to={`/watch/${video.videoId}`}>
        <div className="flex ml-2">
          <div>
            <div className="relative hover:rounded-none duration-200 overflow-hidden ">
              {video.thumbnail && video.thumbnail.length > 0 ? (
                <img src={video.thumbnail[0].url} alt="Thumbnail" className='h-[235px] w-[420px] rounded-[15px]' />
              ) : (
                <span>No Thumbnail Available</span>
              )}
              <span className=' absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-sx rounded-md'>{video.lengthText}</span>
            </div>
          </div>

          <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden w-[400px] h-[300px] ">
            <span className="text-[18px] md:text-2xl  line-clamp-2 mb-1">
              {video.title}
            </span>
            <div className="flex text-sm truncate overflow-hidden text-[#606060]">
              <span>
                {`${abbreviateNumber(
                  video.viewCount, 2
                )} views`}
              </span>
              <span className="truncate ml-1"> • {video.publishedTimeText}</span>
            </div>
            <div className="hidden md:flex items-center  mt-5">
              <div className="flex items-start mr-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img src={video.channelThumbnail[0].url} alt="Channel Thumbnail" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm mt-2  flex items-center text-[#606060]">
                  {video.channelTitle}
                </span>
              </div>
            </div>
            <span className="empty:hidden text-sm line-clamp-2 md:line-clamp-2md:pr-24 md:my-4 text-[#606060]">
              {video.description}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchDetail
