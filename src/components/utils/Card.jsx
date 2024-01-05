import React from 'react'

export default function Card({children}) {
  return (
    <div className='flex justify-center items-center flex-col border-2 rounded-lg px-[4%] py-[3%] border-skyBlue text-forestGreen bg-burntSienna w-max h-max text-xl md:text-4xl'>
      {children}
    </div>
  )
}
