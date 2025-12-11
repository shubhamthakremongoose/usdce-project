import React from 'react'
import Hero from './Hero'
import Alignment from './Alignment'
import Highlights from './Highlights'
import AboutUs from './About'
import Workflow from './WorkFlow'
import ScrollOverlap from '../common/ScrollOverlap'

export default function Home() {
    return (
        <div className='w-full overflow-x-hidden'>
            <nav className="w-full py-4 px-4 xl:px-24 flex items-center bg-transparent">
                <img src="/assets/logo.png" alt="logo" className="h-8" />
            </nav>
            <Hero />
            <ScrollOverlap>
                <Alignment />
            </ScrollOverlap>
            <AboutUs />
            <Highlights />
            <Workflow />
        </div>
    )
}
