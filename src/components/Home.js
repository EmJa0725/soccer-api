import React, { Fragment } from 'react'
import { Link} from "react-router-dom";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Slider from "react-slick";
import premier from "../assets/premier-logo.png";
import ligueOne from "../assets/ligue-one-logo.png";
import laLiga from "../assets/la-liga-logo.png";
import serieA from "../assets/serie-a-logo.png";
import bundesliga from "../assets/bundesliga-logo.png";

const Home = () => {
    const leagues = [premier, laLiga, ligueOne, serieA, bundesliga];
    const leagueNames = ['premier', 'laLiga', 'ligueOne', 'seriaA', 'bundesliga'];
    
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
                    {leagues.map((img, idx) => (
                        <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <Link to={`standings/${leagueNames[idx]}`} state={{ data: leagueNames[idx] }}>
                                <img src={img} alt={img} />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    )
}

export default Home
