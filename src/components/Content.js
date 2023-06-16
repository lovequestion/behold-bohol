import {Container, Row, Col} from 'react-bootstrap';
import GridItems from './GridItems';
import alonabeach from './../img/alonabeach.png';
import baclayonchurch from './../img/baclayonchurch.png';
import bohollywood from './../img/bohollywood.png';
import chocolatehills from './../img/chocolatehills.png';
import lobocriver from './../img/lobocriver.png';
import manmade from './../img/manmade.png';

import ImageSlide from './Carousel';
import ImageSlide2 from './Carousel2';

const Content = () => {
    return ( 
        <div className="bg-light text-dark">
            <Container className='mt-4'>
              <Row>
                <Col>
                  <ImageSlide></ImageSlide>
                </Col>
                <Col>
                  <ImageSlide2></ImageSlide2>
                </Col>
              </Row>
            </Container>
            <Container className='mt-4'>
                <h1 className='text-center'>Best of Bohol</h1>
                <br />
                <Row className='g-4 justify-content-center'>
                    <GridItems image={bohollywood} title='Bohollywood' text='See the whole world in one place. Mirror of the World Bohol will take you there.'/>
                    <GridItems image={alonabeach} title='Beach and Cave Pool' text='Experience the white sand beach and breathtaking deep blue color cave pool.' />
                    <GridItems image={baclayonchurch} title='Baclayon Church' text='One of the most old churches in the Phiippines. It is a Spanish colonial power in the region.' />
                    <GridItems image={chocolatehills} title='Chocolate Hills' text='They are covered in green grass that turns brown during the dry season.' />
                    <GridItems image={manmade} title='Man-made Forest' text='This lush green forest is a stunning example of man ability to restore and preserve the natural habitat.' />
                    <GridItems image={lobocriver} title='Loboc River' text='One of the cleanest rivers in the Philippines with its distinctly green but crystal water.' />

                </Row>
            </Container>
            
        </div>
     );
}
 
export default Content;