import { React, useState, useEffect } from 'react'
import ChannelCard from './ChannelCard'

import { useParams} from 'react-router-dom'
import { fetchFromServer } from './utils/fetchFromServer';


import VedioFeed from './VedioFeed'

export default function ChannelDetail() {

  const { id } = useParams();
  const [vedios, setVedios] = useState([]);
  const [channel, setChannel] = useState(null);


  useEffect(() => {
    fetchFromServer(`channels?part=snippet&id=${id}`).then((data) => setChannel(data?.items[0]));

    fetchFromServer(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVedios(data.items));
  }, [id])

  return (
    <div>
      <div className='bg-[rgb(0,61,115)] bg-gradient-to-tr from-[rgba(0,61,115,1)] to-[rgba(89,1,21,1)] h-60 w-full relative mb-72'>
        <div className='absolute top-[100px] mx-auto inset-0'>
      <ChannelCard vedio={channel}/>
      </div>
      </div>
      <VedioFeed vedios={vedios}/>
    </div>
  )
}
