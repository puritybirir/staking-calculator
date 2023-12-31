import React from 'react'
import Image from 'next/image'
import searchIcon from '../assets/images/search.svg'

const SearchBar = () => {
  return (
    <form className='mt-4'>
      <div className='flex justify-center gap-2 bg-[#F3F3F3] w-[300px] md:w-full py-3 rounded'>
        <Image className='ml-[7px]' src={searchIcon} alt='Search Icon' width={13} height={13} />
        <input
          className='w-full bg-[#F3F3F3] text-xs outline-none'
          type="text"
          name="search"
          id=""
          placeholder='Type a search query to filter'
        />
      </div>
    </form>
  )
}

export default SearchBar
