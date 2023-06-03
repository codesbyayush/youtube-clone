import React from 'react'
import Sidebar from './Sidebar'

import { fetchFromServer } from './utils/fetchFromServer'
import { useState, useEffect } from 'react'
import VedioFeed from './VedioFeed';
import { useParams } from 'react-router-dom';

export default function SearchFeed() {

  const [vedio, setVedio] = useState([]);
  const [cateogary , setCateogary] = useState('New');
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromServer(`search?part=snippet&q=${searchTerm}`).then((data) => setVedio(data.items));
  }, )


  return (
    <div className='flex'>
      <div className='h-[95vh]'>
      <Sidebar setCateogary= {setCateogary} cateogary={cateogary}/>
      </div>
      <div className='pl-8 pt-6 h-[95vh] overflow-y-scroll'>
        <h2 className='font-bold text-3xl pb-8'>{cateogary} Vedios</h2>
        <VedioFeed vedios={vedio}/>
      </div>
    </div>
  )
}
