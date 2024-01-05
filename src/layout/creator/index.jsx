import React from 'react'

export default function Creator() {
  return (
    <div className='flex justify-between items-center py-3'>
      <div className=' flex-grow bg-forestGreen h-1 rounded-md'></div>
      <span className='text-sm sm:text-xl mx-5'>Created by <a href='https://github.com/alipsm' className='text-forestGreen underline underline-offset-4  hover:opacity-80 transition-opacity'>me</a></span>
      <div className='flex-grow bg-forestGreen h-1 rounded-md'></div>
    </div>
  )
}
