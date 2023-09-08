import React, { useState,useEffect } from 'react';
import classes from './Collection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CollectionCard from './CollectionCard';

function Collection() {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        async function CollectionsFetch(){
            const response = await fetch('http://localhost:8000/api/collections');
            const images1=await response.json();
            setCollections(images1);
            }
            CollectionsFetch();


    }, [])
    return (
  
            <div>
                <Container>
                    <Row>
                        {collections.map((img) => (
                            <Col className={classes.colSpace} xs={12} sm={6} md={4} lg={3} key={img.id}>
                                <CollectionCard title={img.title} link={img.image_link} />
                            </Col>
                        ))}


                    </Row>
                </Container>
            </div>
   



    );
}

export default Collection;






/*
const images = [
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Blouse'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Lehenga'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Kurta'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Night Dress'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Frocks'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Skirt'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Salwar'
    },
    {
        link: "https://i.pinimg.com/originals/89/59/be/8959be610d8f85233f08746bab018974.jpg",
        title: 'Salwar'
    },
    
];
*/