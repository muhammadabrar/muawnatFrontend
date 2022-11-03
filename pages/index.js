
import Navbar from '../comp/navbar'
import Hero from '../comp/Hero'

import Footer from '../comp/Footer'
import About from '../comp/about'
import Clients from '../comp/clients'
import HTA from '../comp/HTA'
import Blog from '../comp/blog'


// You can also pass an optional settings object
// below listed default settings

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
    <About/>
    <Clients/>
    <HTA/>
    <Blog/>
      <Footer/>
    </>
  )
}
