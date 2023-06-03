import React from 'react'

import { categories } from '../components/utils/constant'

export default function Sidebar({ setCateogary, cateogary }) {
  return (
    <div className='flex flex-col bg-gray-900 text-white pl-2 pr-4 border-r-4 border-gray-500 min-w-min h-full overflow-y-scroll'>
        {categories.map((cateogary) => (
            <button className='flex gap-6 p-4 text-lg' key={cateogary.name} onClick={() => setCateogary(cateogary.name)}>
                <span>{cateogary.icon}</span>
                <span className='whitespace-nowrap'>{cateogary.name}</span>
            </button>
        ))
        }
    </div>
  )
}
