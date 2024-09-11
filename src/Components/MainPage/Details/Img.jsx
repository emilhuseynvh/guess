import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const details = {
    title: 'Eco beige treated flower jumper',
    img: [
        'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V1.jpg?v=1721191714&width=1100',
        'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V4.jpg?v=1721191714&width=1100',
        'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V2.jpg?v=1721191715&width=1100',
        'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V5.jpg?v=1721191715&width=1100',
        'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V3.jpg?v=1721191714&width=1100'
    ],
    desc: 'Get cosy and eco-friendly with our Eco Beige Treated Flower Jumper. Made from 100% cotton, this crew-neck jumper features long sleeves and a playful logo detail. Stay stylish while being kind',
    price: '$ 129.95',
    size: ['xs', 's', 'm', 'l', 'xl', '2xl'],
    quant: ['1', '2', '3']

}

const Img = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: isMobile,
        arrows: !isMobile,  // Show arrows only on larger screens
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            {details.img.map((img, i) => (
                <img className='lg:block hidden' key={i} src={img} alt="Image" />
            ))}

            <div className="slider-container w-full block lg:hidden">
                <Slider {...settings}>
                    {details.img.map((item, i) => (
                        <div key={i}>
                            <img src={item} alt={`Slide ${i + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <FaChevronRight
            className="next-arrow"
            onClick={onClick}
            style={{ display: 'block' }}
        />
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <FaChevronLeft
            className="prev-arrow"
            onClick={onClick}
            style={{ display: 'block' }}
        />
    );
};

export default Img;

