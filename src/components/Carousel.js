import {Carousel} from 'react-bootstrap';
import alona from './../img/carousel/alona.jpg';
import baclayon3 from './../img/carousel/baclayon3.jpg';
import baclayon1 from './../img/carousel/baclayon1.jpg';
import balicasag from './../img/carousel/balicasag.jpg';
import bohollywood from './../img/carousel/bohollywood.jpeg';


const ImageSlide = () => {
    return ( 
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alona}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={baclayon3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={balicasag}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={baclayon1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bohollywood}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
     );
}
 
export default ImageSlide;
