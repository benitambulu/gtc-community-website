import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Ticker from './Ticker'
import Stats from './Stats'
import WhatWeDo from './WhatWeDo'
import WhoItsFor from './WhoItsFor'
import HowItWorks from './HowItWorks'
import PeopleSection from './PeoplesSection'
import UseScrollReveal from '../../hooks/UseScrollReveal'
import Testimonials from './Testimonials'

export const LandingPage = () => {
    
  return (
      <div>
        <UseScrollReveal/>
        <Navbar/>
        <Hero/>
        <Ticker/>
        <Stats/>
        <WhatWeDo/>
        <WhoItsFor/>
        <HowItWorks/>
        <PeopleSection/>
        <Testimonials/>
    </div>
  )
}

 