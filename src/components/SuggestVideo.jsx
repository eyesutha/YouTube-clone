import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { abbreviateNumber } from 'js-abbreviation-number';

function SuggestVideo({ video }) {
  useEffect(() =>
    console.log(video), [video])

  return (
    <div>
      <Link to={`/watch/${video.videoId}`}>
        <div className='flex mb-3'>
          <div className='thumb relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl'>
            {video.thumbnail && video.thumbnail.length > 0 ? (
              <img src={video.thumbnail[0].url} alt="Thumbnail" />
            ) : (
              <span>No Thumbnail Available</span>
            )}
            <div className='w-[28px] h-[10px]'>
              {video.lengthText}
            </div>
          </div>
          <div className='detail flex flex-col ml-3 overflow-hidden'>
            <div className='descri '>
              <span className="title lg:text-xs xl:text-sm font-bold line-clamp-2">
                {video.title}
              </span>
              <span className="channel text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2  flex items-center">
                {video.channelTitle}
              </span>
              <div className="view flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden">
                <span>
                  {`${abbreviateNumber(
                    video.viewCount, 2
                  )} views`}
                </span>
                <span className='ml-1 truncate'>
                  • {video.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default SuggestVideo
