import Carousel from "react-bootstrap/Carousel";
// import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home-banner">
        <h1>Welcome to the World of F1!</h1>
        <p>
          Your All-in-One Formula 1 Companion, Bringing the Thrill of the Track
          to Your Fingertips with Real-Time Updates, Interactive Simulations,
          and Exclusive Content!
        </p>
      </div>
      <div className="carousel-wrapper">
        <Carousel>
          <Carousel.Item interval={1000}>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
