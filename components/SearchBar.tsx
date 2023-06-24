import React from 'react'
import Image from 'next/image'
import searchIcon from '../assets/images/search.svg'

const SearchBar = () => {
  return (
    <form className='mt-4'>
      <div className='flex justify-center gap-2 bg-[#F3F3F3] w-[300px] md:w-[615px] py-2 '>
        <Image className='ml-[7px]' src={searchIcon} alt='Search Icon' width={13} height={13} />
        <input
          className='w-full bg-[#F3F3F3] text-xs'
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
