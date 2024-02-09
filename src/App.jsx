import React from 'react'
import Welcome from './layout/welcome'
import Info from './layout/info'
import TryIt from './layout/tryIt'
import Creator from './layout/creator'
import Caching from './layout/caching/Caching'
import Example from './layout/example'

export default function App() {
  const sections = [
    <Welcome />,
    <Info />,
    <Example/>,
    <Caching />,
    <TryIt />,
  ]


  
  return (
    <div className='bg-red text-[100px] text-red  bg-charcoalBlack text-skyBlue px-[4%] box-border relative'>
      {sections.map((item, i) =>
      (
        <div key={i} className='w-full h-screen py-6'>
              {item}
        </div>
      ))}
      <Creator />
    </div>
  )
}
