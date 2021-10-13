import "./App.css";
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import premier from "./assets/premier-logo.png";
import ligueOne from "./assets/ligue-one-logo.png";
import laLiga from "./assets/la-liga-logo.png";
import serieA from "./assets/serie-a-logo.png";
import navbarIcon from "./assets/navbar-icon.png";
import bundesliga from "./assets/bundesliga-logo.png";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const images = [premier, laLiga, ligueOne, serieA, bundesliga];

function App() {
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
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={navbarIcon}
              width="40"
              height="40"
              className="d-inline-block align-top me-4"
            />
            <span class="d-inline-block align-middle">Soccer leagues standings</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="sliderContainer">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
