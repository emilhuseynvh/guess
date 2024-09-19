import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Img = ({ product }) => {
    console.log(product);
    
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
        arrows: !isMobile,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            {product?.images.map((img, i) => (
                <img className='lg:block hidden' key={i} src={img} alt="Image" />
            ))}

            <div className="slider-container w-full block lg:hidden">
                <Slider {...settings}>
                    {product?.images.map((item, i) => (
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

