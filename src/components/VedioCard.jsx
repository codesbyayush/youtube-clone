import React from 'react'

import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function VedioCard({ vedio }) { 

  const navigate = useNavigate();
  const handleclick = (e) => {
    e.preventDefault();
    if(vedio.id.videoId){
      navigate(`/vedio/${vedio?.id?.videoId}`)
    }
  }

  return (
    <div className='flex-col flex ' onClick={ handleclick }>
        <div className='rounded-2xl overflow-hidden'>

            <img src={vedio.snippet.thumbnails.medium.url} alt="" className=''/>
        </div>
        <div className='px-8 py-4 w-[320px]'>
            <h3 className='text-xl font-semibold mb-3'>{vedio.snippet.title}</h3>
            <h5 className='text-lg text-gray-700'>{vedio.snippet.channelTitle}</h5>
        </div>
    </div>
  )
}
