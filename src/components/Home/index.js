import React from 'react'
import Navbar from '../Navbar/Navbar'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container'

function Home() {
  return (
    <div>
        <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  )
}

export default Home