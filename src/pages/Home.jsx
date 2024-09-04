import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Home/Hero'
import Products from '../Components/Home/Products'
import Introducing from '../Components/Home/Introducing'
import SweetLife from '../Components/Home/SweetLife'

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Introducing />
      <SweetLife />
    </main>
  )
}

export default Home