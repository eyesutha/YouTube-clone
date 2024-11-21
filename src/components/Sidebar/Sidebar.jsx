import React from 'react'
import './SidebarStyle.css'


const Sidebar = ({ isOpen }) => {


  return (
    <section id="sidebar" className='flex-none bg-white sticky top-0 overflow-y-scroll h-screen' >
      {isOpen ? (

        <div className='sidebar text-sm px-[12px] '>
          <div className='border-b-2'>
            <a href='#' >
              <div className='side-link '>
                <img src='/images/yticon/home.svg' /><p>Home Page</p>
              </div>
              <div className='side-link'>
                <img src='/images/yticon/short.svg' /><p>Shorts</p>
              </div>
              <div className='side-link '>
                <img src='/images/yticon/tracking.svg' /><p>Tracking</p>
              </div>
            </a>
          </div>

          {/* you */}
          <div className='border-b-2 mt-2'>
            <a href='#'>
              <div className='side-link font-semibold text-base'>
                <span>you</span><img src='/images/you/mark.svg' />
              </div>
              <div className='side-link'>
                <img src='/images/you/channel.svg' /><p>Your channel</p>
              </div>
              <div className='side-link'>
                <img src='/images/you/history.svg' /><p>Browsing history</p>
              </div>
              <div className='side-link'>
                <img src='/images/you/playlist.svg' /><p>Playlist</p>
              </div>
              <div className='side-link'>
                <img src='/images/you/yourvideo.svg' /><p>Your videos</p>
              </div>
              <div className='side-link'>
                <img src='/images/you/watchlater.svg' /><p>Watch later</p>
              </div>
              <div className='side-link'>
                <img src='/images/you/favorite.svg' /><p>Favorite videos</p>
              </div>
            </a>
          </div>

          {/* tracking */}
          <div className='border-b-2 mt-2'>
            <a href='#'>
              <div className='side-link font-semibold text-base'>
                <p>Tracking</p>
              </div>
              <div className='side-link'>
                <img src='https://yt3.ggpht.com/th3n59teuGw-yBg-wugUjj67ppzug9tW2WogClVUtawyz7qZBq0TDavkOZ7Oc_Z07yfwN9f5=s88-c-k-c0x00ffffff-no-rj'
                  className='rounded-full' /><p>NCT</p>
              </div>
              <div className='side-link'>
                <img src='https://yt3.ggpht.com/qeFTVqptlY3hmwi51Eozl2iQIyfKbWexTBfoioFsWcIQGpOeOSipsQd_BRP2pkMbjGBzHnVH2g=s88-c-k-c0x00ffffff-no-rj'
                  className='rounded-full' /><p>NCT 127</p>
              </div>
              <div className='side-link rounded-full'>
                <img src='https://yt3.ggpht.com/0eZ0gU_5POSmcPDmkrct9o8cAudWeFaA2S_baXYsrAWedevotUEIosZkQlKeCf14go9Ca4qYM9Y=s88-c-k-c0x00ffffff-no-rj'
                  className='rounded-full' /><p>NCT DREAM</p>
              </div>
              <div className='side-link '>
                <img src='/images/tracking/alltrack.svg' /><p>All Tracking</p>
              </div>
            </a>
          </div>

          {/* explore */}
          <div className='border-b-2 mt-2'>
            <a href='#'>
              <div className='side-link font-semibold text-base'>
                <p>explore</p>
              </div>
              <div className='side-link'>
                <img src='/images/explore/comingonstrong.svg' /><p>Coming on strong</p>
              </div>
              <div className='side-link'>
                <img src='/images/explore/song.svg' /><p>song</p>
              </div>
              <div className='side-link'>
                <img src='/images/explore/game.svg' /><p>game</p>
              </div>
              <div className='side-link'>
                <img src='/images/explore/message.svg' /><p>message</p>
              </div>
              <div className='side-link '>
                <img src='/images/explore/sport.svg' /><p>sport</p>
              </div>
            </a>
          </div>

          {/* more from youtube */}
          <div className='border-b-2 mt-2'>
            <a href='#'>
              <div className='side-link font-semibold text-base'>
                <p>more from youyube</p>
              </div>
              <div className='side-link'>
                <img src='/images/yticon/premium.svg' /><p>YouTube Premium</p>
              </div>
              <div className='side-link'>
                <img src='/images/yticon/studio.svg' /><p>YouTube Studio</p>
              </div>
              <div className='side-link'>
                <img src='/images/yticon/music.svg' /><p>YouTube Music</p>
              </div>
              <div className='side-link '>
                <img src='/images/yticon/kid.svg' /><p>YouTube Kids</p>
              </div>
            </a>
          </div>
          <div className='border-b-2 mt-2'>
            <a href='#'>
              <div className='side-link'>
                <img src='/images/yticon/setting.svg' /><p>Settings</p>
              </div>
              <div className='side-link'>
                <img src='/images/yticon/report.svg' /><p>Report History</p>
              </div>
              <div className='side-link'>
                <img src='/images/yticon/help.svg' /><p>Help</p>
              </div>
              <div className='side-link text-ellipsis overflow-hidden whitespace-nowrap'>
                <img src='/images/yticon/submit.svg' /><p className='truncate'>Submit your comments</p>
              </div>
            </a>
          </div>
          <div className='text-[13px] pt-4 text-[#606060] font-[590] ml-3'>
            <div>
              <span>
                about  Media  copyright <br />
                Contact us  Creator  advert <br />
                Software Developer <br />
              </span>
            </div>
            <div className='mt-4 mb-2'>
              <span>
                Requirements privacy <br />
                Policy and Safety <br />
                How YouTube works <br />
                Try out new features
              </span>
            </div>
            <span className='text-[12px] text-[#909090]'>
              Clone By Suthasinee<br />
              &copy; 2024 Google LLC
            </span>
          </div>
        </div>
      ) : (
        <div className='text-[10px] w-[30%]'>
          <a href='#' >
            <div className='side-short '>
              <img src='/images/yticon/home.svg' />
              <p>Home Page</p>
            </div>
            <div className='side-short'>
              <img src='/images/yticon/short.svg' />
              <p>Shorts</p>
            </div>
            <div className='side-short '>
              <img src='/images/yticon/tracking.svg' />
              <p>Tracking</p>
            </div>
            <div className='side-short cursor-pointer'>
              <img src='/images/yticon/profile.svg' className='w-[24px] h-[24px]' />
              <p>You</p>
            </div>
          </a>
        </div>
      )}

    </section >
  )
}

export default Sidebar

