import {Carousel} from 'react-bootstrap';

import pic6 from './../img/carousel/6.jpg';
import pic7 from './../img/carousel/7.jpg';
import pic8 from './../img/carousel/8.jpg';
import pic9 from './../img/carousel/9.jpg';
import pic10 from './../img/carousel/10.jpg';

const ImageSlide2 = () => {
    return ( 
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic7}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic9}
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic10}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
     );
}
 
export default ImageSlide2;
