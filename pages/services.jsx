import React from 'react'
import Hero from '../components/Hero'
import ServicesPage from '../components/ServicesPage'

const services = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <ServicesPage />
    </div>
  )
}

export default services