import React from 'react'
import Hero from '../components/Hero'
import AboutUsPage from '../components/AboutUs'

const aboutus = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <AboutUsPage />
    </div>
  )
}

export default aboutus