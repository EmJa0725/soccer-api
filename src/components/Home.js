import React, { Fragment } from 'react'
import { Link} from "react-router-dom";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { leagues } from '../config/leaguesDictionary';

import Slider from "react-slick";


const Home = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FiChevronRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FiChevronLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <Fragment>
            <div className="sliderContainer">
                <Slider {...settings}>
                    {leagues.map((league, idx) => (
                        <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <Link to={`standings/${league.name}`} state={{ data: {...league}}}>
                                <img src={league.logo} alt={league.name} />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    )
}

export default Home
