

import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchFromServer } from './utils/fetchFromServer';

import VedioFeed from './VedioFeed';

export default function VedioDetail() {

  const { id } = useParams();
  const [vedioDetails, setVedioDetails] = useState(null);
  const [vedio , setVedio] = useState(null);

  useEffect(() => {

    fetchFromServer(`videos?part=snippets,statistics&id=${id}`).then((data) => setVedioDetails(data.items[0]))
    fetchFromServer(`part=snippet&relatedToVedioId=${id}&type=vedio`).then((data) => setVedio(data.items))

    console.log(vedio)
  }, [id])

  return (
    <div className='bg-black h-[95vh] text-white'>
      <div className='flex'>
      <div className='flex-1'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                  height='77vh'
                  width='100%'
                  controls
      />
      <h2> {vedioDetails?.snippet?.localized?.title} </h2>
      <h4> {vedioDetails?.snippet?.channelTitle} </h4>
      </div>

      <div>
        <VedioFeed vedios={vedio} direction={"row"}/>
      </div>
      </div>
    </div>
  )
}
