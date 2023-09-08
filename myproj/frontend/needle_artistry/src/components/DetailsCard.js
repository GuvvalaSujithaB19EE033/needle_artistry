import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DetailsCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.link} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DetailsCard;