import React from 'react'

const Map = () => {
  return (
    <div>
        <iframe className='w-full lg:h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.847829007706!2d49.83534201218719!3d40.3678983713284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da484c1d7c5%3A0xf1b02bddc5d0002!2sGUESS!5e0!3m2!1saz!2saz!4v1727618481815!5m2!1saz!2saz" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map