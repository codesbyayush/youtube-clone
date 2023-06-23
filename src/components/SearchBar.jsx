
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Search } from '@mui/icons-material'

export default function SearchBar() {
  
  const [ searchItem, setSearchItem] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchItem) {
      navigate(`/search/${searchItem}`);
      setSearchItem("");
    }
  }


  return (
    <div className='flex border-2 pr-1 sm:pr-4 pl-4 w-56 sm:w-auto sm:pl-6 py-3 rounded-full text-gray-400 border-gray-600'>
      <input type="text"
            className='focus:outline-none text-xl bg-transparent w-36 sm:w-auto' 
            placeholder='Search...' 
            value={searchItem} 
            onChange={(e) => setSearchItem(e.target.value)}
      />
      <button className=' border-l-2 p-2 border-gray-500' type="submit" onClick={handleSubmit}>
        <Search />
      </button>    
    </div>
  )
}
