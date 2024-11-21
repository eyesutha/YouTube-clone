import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../utils/rapidapi'
import SearchDetail from '../SearchDetail'
import ReactLoading from "react-loading"

function SearchContent() {
  const [result, setResult] = useState([])
  const { searchQuery } = useParams()
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState(null) 

  useEffect(() => {
    fetchSearchResults()
  }, [searchQuery])

  const fetchSearchResults = async () => {
    try {
      const {data} = await fetchData(`search?query=${searchQuery}`);
      setResult(data);
    } catch (err) {
      setError("Error fetching data:", error);
      console.error(err); 
    }finally {
      setLoading(false)  
  }
  }

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
    <div className='text-sm px-[24px] flex flex-col'>

      <div className="flex mt-2 overflow-y-scroll overflow-x-hidden flex-col gap-2">
      {Array.isArray(result) && result.length > 0 ? (
          result.map((item, index) => {
            console.log(item);
            if (item.type !== "video") return false;
            return <SearchDetail key={index} video={item} />;
          })
        ) : (
          <div>No results found</div>  
        )}
       
      </div>
     
    </div>
  )
}

export default SearchContent
