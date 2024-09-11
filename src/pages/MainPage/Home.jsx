import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../Components/MainPage/Home/Hero'
import Products from '../../Components/MainPage/Home/Products'
import Introducing from '../../Components/MainPage/Home/Introducing'
import SweetLife from '../../Components/MainPage/Home/SweetLife'

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