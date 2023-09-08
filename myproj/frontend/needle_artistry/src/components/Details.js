import DetailsCard from "./DetailsCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Details.module.css';

function Collection(props) {
    const data = props.data;
    return (
       
        <div style={{padding: '2%'}}>
            <h1 style={{ textAlign:'center', fontFamily: 'Snell Roundhand,cursive', fontWeight:'bold' }}>Pick your Style</h1>
            <Container>
                <Row>
                    {data.map((data) => (
                        <Col className={classes.colSpace} xs={12} sm={6} md={4} lg={3} key={data.id} >
                            <DetailsCard title={data.title} link={data.image_link} text={data.description} />
                        </Col>
                    ))}


                </Row>
            </Container>
        </div>




    );
}

export default Collection;


