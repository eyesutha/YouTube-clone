import React, { useEffect, useState } from 'react'
import Tags from '../Tags/Tags'
import './ContentStyle.css'
import CardVideo from '../CardVideo'
import CardShort from '../CardShort'
import { fetchData } from '../../utils/rapidapi'
import ReactLoading from "react-loading"

function Content() {
  const [videos, setVideos] = useState([])
  const [shorts, setShorts] = useState([])
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState(null) 

  useEffect(() => {

    const fetchVideos = async (id) => {
      try {
        const { data } = await fetchData(`search?query=${id}`) 
        console.log(data)
        setVideos(data || [])
  
      } catch (err) {
        setError('Failed to fetch videos')
        console.error(err)
      }
    }


    const fetchShorts = async (id) => {
      try {
        const { data } = await fetchData(`search?query=${id}`) 
        console.log(data)
        const shortsData = data.find(item => item.type === "shorts_listing")?.data || []
        const shortsList = shortsData.filter(short => short.type === "shorts").slice(0, 6)
        setShorts(shortsList)
      } catch (err) {
        setError('Failed to fetch shorts')
        console.error(err)
      }
    }

    const fetchDataAsync = async () => {
      await Promise.all([fetchVideos(), fetchShorts()])
      setLoading(false)  
    }

    fetchDataAsync()

  }, [])

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



  return (
    <section id="content" className='text-sm px-[24px] flex flex-col w-full'>

      <Tags />

      {/* videocard */}
      <section className='videocard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
        {
          videos.map((item) => {
            if (item.type !== "video") return null
            return (
              <div>
                <CardVideo key={item.id} video={item} />
              </div>
            )
          })
        }

        <>
          {/* <div className='card'>
          <div className='thumb'>
            <img src='https://via.placeholder.com/480x270' />
          </div>
          <div className='detail'>
            <div className='channel-img'>
              <img src='https://via.placeholder.com/36x36' />
            </div>
            <div className='descri '>
              <div className="title">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
              <div className="channel">
                NCT127
              </div>
              <div className="view">127 million views • 7 days ago</div>
            </div>
          </div>
        </div> */}
        </>

      </section>



      {/* short */}
      <section className='shorts py-[24px] overflow-y-hidden'>
        <div className='flex mb-[24px] ml-[8px]'>
          <img src='/images/yticon/short2.svg' className='w-[24px] h-[24px] mr-2' />
          <p className='text-xl font-bold'>Shorts</p>
        </div>
        <div className="short-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  gap-[16px] pb-[32px] border-b-2 mb-[48px] rounded-lg">
          {
            shorts.map((short) => (
              <CardShort key={short.videoId} video={short} />
            ))
          }
          <>
            {/* <div className='short '>
            <Link to="/short/:id">
              <div className="thumb-short">
                <img src='https://via.placeholder.com/270x480' />
              </div>
              <div className="-descri">
                <div>
                  <a href='' className="title">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </a>
                  <div className='view'> 7 million views</div>
                </div>
              </div>
            </Link>
          </div> */}
          </>
        </div>
      </section>
    </section>
  )
}

export default Content
