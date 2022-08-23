import React from 'react'
import Footer from '../../components/compound/footer'
import Header from '../../components/compound/header'
import Navbar from '../../components/compound/navbar'
import AboutUs from '../../components/pagespecific/Home/about'
import Main from '../../components/pagespecific/Home/main'
import Services from '../../components/pagespecific/Home/services'
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Services />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home