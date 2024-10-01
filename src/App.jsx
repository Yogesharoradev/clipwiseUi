import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import Products from './components/Products'
import Banner from './components/banner'

const  App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Products />
        <Banner />
        <Footer />
    </>
  )
}

export default  App