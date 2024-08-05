import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Course></Course>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
