import React, { useState } from 'react'
import './TagStyle.css'

const keywords = [
    'All',
    'Song',
    'Mix',
    'Message',
    'Live',
    'Rap Music',
    'Coding',
    'Drama',
    'Movie',
    'News',
    'History',
    'Gaming',
    'Comedy',
    'Eating',
    'Pop Music',
    'Latest Uploads',
    "I've Seen It",
    'New Videos for You',
]

const Tags = () => {
    const [activeElement, setActiveElement] = useState('All');

    const handleClick = value => {
        setActiveElement(value)
    }

    return (
        <div className={`overflow-x-auto  w-full`}>
            {keywords.map((value) => (
                <span
                    key={value}
                    onClick={() => handleClick(value)}
                    className={`tags inline-flex items-center justify-center text-[14px] h-[32px] rounded-[8px] outline-0 cursor-pointer m-[7px] bg-[#F2F2F2] font-[580] px-4 py-2 ${activeElement === value ? 'active' : ''}`}
                >
                    {value}
                </span>
            ))}
        </div>
    )
}

export default Tags
