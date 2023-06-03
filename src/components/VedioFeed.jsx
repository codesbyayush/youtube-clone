import React from 'react'
import VedioCard from './VedioCard'
import ChannelCard from './ChannelCard'

export default function VedioFeed({ vedios, direction }) {
  const flexDir = direction?direction:"row";
  return (
    ( vedios && 
    <div className={`flex flex-wrap gap-4 justify-center w-full flex-${flexDir}`}>
        {vedios.map((vedio,ind) => (
           vedio.id.channelId ? <ChannelCard key={ind} vedio={vedio} /> : <VedioCard key={ind} vedio={vedio}/>   
        ))}

    </div>
    )
  )
}
