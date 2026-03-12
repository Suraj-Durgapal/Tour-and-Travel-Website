import React from 'react'
import Hero from '../sections/Hero'
import History from '../sections/History'
// import DestinationSection from '../sections/DestinationSection'
import Desti from '../sections/Desti'
import AdventureSection from '../sections/AdventureSection'

const Home = () => {
  return (
    <div>
        <Hero/> 
        <History/>
        <Desti/>
        <AdventureSection/>
    </div>
  )
}

export default Home
