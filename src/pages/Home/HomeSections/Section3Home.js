import React from 'react'
import HorizontalScrollSection from './HorizontalScrollSection'
import { NavLink } from 'react-router-dom'

const Section3Home = () => {
  return (
    <section className='relative mb-48'>
        <HorizontalScrollSection />
        <div className='w-full absolute bottom-20 md:-bottom-32 flex justify-center'>
            <button className='mx-auto w-4/5 py-2 text-lg border-2 border-black hover:bg-black hover:text-white'><NavLink>See More {'>'}</NavLink></button>
        </div>
    </section>
  )
}

export default Section3Home;