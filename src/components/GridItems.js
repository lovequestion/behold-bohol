import {Card, Col, Button} from 'react-bootstrap';

const GridItems = (cards) => {
    return ( 

            <Col md='4'>
                <Card>
                    <Card.Img variant='top' src={cards.image} />
                    <Card.Body>
                    <Card.Title>{cards.title}</Card.Title>
                    <Card.Text>{cards.text}</Card.Text>
                    <Button variant='danger'>More Info</Button>
                    </Card.Body>
                </Card>
            </Col>

     );
}
 
export default GridItems;