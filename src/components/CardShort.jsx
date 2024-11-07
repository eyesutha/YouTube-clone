
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function CardShort({ video }) {
  useEffect(() =>
    console.log(video), [video])
  return (
    <section className='shorts py-[24px]'>
      <Link to={`/short/${video.videoId}`}>
        <div className="short-wrap ">
          <div className='short '>
            <div className="thumb-short">
                <img src={video.thumbnail[0].url} alt="Thumbnail" />
            </div>
            <div className="-descri">
              <div>
                <a href='' className="title">
                  {video.title}
                </a>
                <div className='view'>
                  { video.viewCountText}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default CardShort
