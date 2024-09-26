import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Img = ({ product }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Məlumatlar yüklənəndə loading-i false olaraq təyin et
    useEffect(() => {
        if (product?.images?.length) {
            setLoading(false);
        }
    }, [product]);

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
            {loading ? (
                // Skeleton ilə loading halı
                <div className='lg:block hidden'>
                    <Skeleton width={600} height={400} />
                </div>
            ) : (
                product?.images.map((img, i) => (
                    <img className='lg:block hidden' key={i} src={img} alt="Image" />
                ))
            )}

            <div className="slider-container w-full block lg:hidden">
                {loading ? (
                    <Skeleton height={300} count={1} />
                ) : (
                    <Slider {...settings}>
                        {product?.images.map((item, i) => (
                            <div key={i}>
                                <img src={item} alt={`Slide ${i + 1}`} />
                            </div>
                        ))}
                    </Slider>
                )}
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


