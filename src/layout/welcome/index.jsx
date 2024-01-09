import React from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'
import NpmInstallCard from '../../components/npm_install_card'

export default function Welcome() {

    return (
        <div className='flex flex-col justify-between w-full h-full box-border'>
            <Header />
            <Banner/>
            <NpmInstallCard />
        </div>
    )
}
