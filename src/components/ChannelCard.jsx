import React from 'react'
import { Link } from 'react-router-dom'

export default function ChannelCard({ vedio }) {

  // api provide channelId when we fetch from search and directly id key when we fetch from channel id...
  const url = vedio?.id?.channelId ? vedio?.id?.channelId : vedio?.id ;

  return (
    <Link to={`/channel/${url}`}>
    <div className='flex-col flex '>
        <div className='self-center'>

            <img src={vedio?.snippet?.thumbnails?.medium.url} alt="" className='rounded-full border-black border-2'/>
        </div>
        <div className='px-8 py-4 w-[320px] text-center mx-auto'>
            <h3 className='text-xl font-semibold m-6'>{vedio?.snippet?.title}</h3>
        </div>
    </div>
    </Link>
  )
}
