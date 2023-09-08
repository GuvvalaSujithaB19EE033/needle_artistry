import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './CollectionCard.module.css'; // Import the CSS module for styling

const CollectionCard = (props) => {
    const imageUrl = 'https://hellolaundry.co.uk/wp-content/uploads/2021/12/clothing-alteration-service-london.jpeg';

    return (
        <div style={{ padding: '10%', width: '70%' }} data-aos="zoom-out">
        <Card className={`${styles.collectionCard} shadow-sm`} style={{ width: '15rem', border: 'none' }}>
            <Link to={`/${props.title}`}>
                <div className={styles.collectionImageWrapper}>
                    <Card.Img className={styles.collectionImage} variant="top" src={props.link} alt={props.title} />
                    <div className={styles.collectionOverlay}>
                        <span className={styles.collectionName}>{props.title}</span>
                    </div>
                </div>
            </Link>
        </Card>
        </div>
    );
};

export default CollectionCard;
