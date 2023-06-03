import React from 'react'
import { Link} from 'react-router-dom'

import { logo } from '../components/utils/constant'
import SearchBar from '../components/SearchBar'

export default function Navbar() {
  return (
    <div className='flex justify-between px-8 sticky top-0 items-center py-4 bg-black'>
      <Link to="/"
            className='flex items-center'
      >
        <img src={logo} alt='logo' className='h-12'/>
      </Link>
      <SearchBar />
    </div>
  )
}
