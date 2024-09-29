import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../../Components/MainPage/Home/Hero'
import Products from '../../Components/MainPage/Home/Products'
import Introducing from '../../Components/MainPage/Home/Introducing'
import SweetLife from '../../Components/MainPage/Home/SweetLife'

const Home = () => {

  const [title, setTitle] = useState('Guess | Home');

  useEffect(() => {
    const handleBlur = () => setTitle('Come Back');
    const handleFocus = () => setTitle(' Guess | Home');

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [window]);

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="That is the descripton of home page." />
      </Helmet>
      <Hero />
      <Products />
      <Introducing />
      <SweetLife />
    </main>
  )
}

export default Home
