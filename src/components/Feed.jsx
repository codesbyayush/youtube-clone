import React from 'react'
import Sidebar from './Sidebar'

import { fetchFromServer } from './utils/fetchFromServer'
import { useState, useEffect } from 'react'
import VedioFeed from './VedioFeed';

export default function Feed() {

  const [cateogary , setCateogary] = useState('New');
  const [vedio, setVedio] = useState([]);

  useEffect(() => {
    fetchFromServer(`search?part=snippet&q=${cateogary}`).then((data) => setVedio(data.items));
  }, [cateogary])


  return (
    <div className='flex'>
      <div className='h-[100vh]'>
      <Sidebar setCateogary= {setCateogary} cateogary={cateogary}/>
      </div>
      <div className='pl-8 pt-6 h-[100vh] overflow-y-scroll'>
        <h2 className='font-bold text-3xl pb-8'>{cateogary} Vedios</h2>
        <VedioFeed vedios={vedio}/>
      </div>
    </div>
  )
}
