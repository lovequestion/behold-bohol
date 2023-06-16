import {Container, Navbar} from 'react-bootstrap';
import HeaderVideo from "./../img/featuredvideo.mp4"
import './../style.css';

const Heading  = () => {
    return ( 
        <div>
            <Navbar bg="dark" variant="dark">
        <Container className='justify-content-center'>
          <Navbar.Brand href="#home">BEHOLD BOHOL</Navbar.Brand>
        </Container>
      </Navbar>

      <video src={HeaderVideo} className='w-100' alt='demon slayer group' muted autoPlay loop/>
        </div>
     );
}

export default Heading;