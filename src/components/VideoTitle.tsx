import React from 'react'

interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='w-1/4'>{overview}</p>
            <div className='flex flex-col w-1/4'>
                <button className='bg-gray-600 p-2 m-2 text-white rounded-lg hover:bg-opacity-70'>Play</button>
                <button className='bg-white p-2 m-2 rounded-lg text-black hover:bg-opacity-50'>More info</button>

            </div>
        </div>
    )
}

export default VideoTitle