import React from 'react'

import copyIco from './img/Copy.png'

export default function NpmInstallCard() {
  return (
    <div className='flex justify-around mx-auto sm:max-w-lg items-center bg-burntSienna text-forestGreen w-full p-7 rounded-lg text-xl transition-all cursor-pointer active:opacity-60 hover:opacity-80 sm:text-4xl'>
      <img src={copyIco} alt='copy' width={30} height={30} />
      <h3 className=''>npm i grab-wizard</h3>
    </div>
  )
}
