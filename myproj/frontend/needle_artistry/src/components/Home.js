import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Home.module.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import { Link as RouterLink } from "react-router-dom";
function Home() {
    const [overlayActive, setOverlayActive] = useState(false);

    useEffect(() => {
        // Enable overlay animation after a short delay
        const timeout = setTimeout(() => {
            setOverlayActive(true);
        }, 300); // Adjust the delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.imageContainer}>
                <img src="https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg" alt="Image 1" className={styles.image1} />
                <div
                    className={`${styles.overlay} ${overlayActive ? styles.active : ''}`}
                >
                    <h1 className={styles.title}>Needle Artistry</h1>
                </div>
            </div>
           
                
                <Container className={styles.image2Container}>
                    <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className={styles.leftContent}  >
                        <h2 className={`d-flex align-items-center ${styles.leftContent1}`}>Our Story</h2>
                        <p className={`d-flex align-items-center ${styles.leftContent2}`}>Welcome to our world of creativity and craftsmanship.</p>
                        <p className={`d-flex align-items-center ${styles.leftContent2}`}>Founded in [Year], our tailoring studio has been dedicated to creating exceptional garments that reflect your unique style and personality.From classic designs to modern trends, we've been tailoring outfits that fit perfectly and make you stand out in any occasion.</p>
                        <RouterLink to="/ourcollection" className={`d-flex align-items-center ${styles.leftContent} ${styles.collectionLink}`}>OUR COLLECTION</RouterLink>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className={styles.rightContent}>
                            <img
                                src="https://images.pexels.com/photos/4621890/pexels-photo-4621890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Image 3"
                                className={styles.image3}
                                data-aos="flip-up"
                            />
                        </Col>
                    </Row>
                </Container>
            <div className={styles.imageContainer1} data-aos="flip-up">
                <img src='https://images.pexels.com/photos/11585385/pexels-photo-11585385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 1" className={styles.image1} />

                <div
                    className={`${styles.overlay} ${overlayActive ? styles.active : ''}`}
                >
                    <h1 className={styles.title}>Threads</h1>
                    <p style={{ color: 'black' }}>Founded in [Year], our tailoring studio has been dedicated to creating exceptional garments that reflect your unique style and personality.From classic designs to modern trends, we've been tailoring outfits that fit perfectly and make you stand out in any occasion</p>
                    <RouterLink to="/fabrics" className={`d-flex align-items-center ${styles.leftContent} ${styles.collectionLink}`}>FABRICS</RouterLink>
                </div>
            </div>
            <div className={styles.imageContainer2}>
                {/* <img src="https://plus.unsplash.com/premium_photo-1673502750959-bc29600bc189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="Image 1" className={styles.image1} /> */}
                <div
                    className={`${styles.overlay} ${overlayActive ? styles.active : ''}`}
                >
                    <h1 className={styles.title}>Alterations</h1>
                    <p style={{color:'black'}}>Founded in [Year], our tailoring studio has been dedicated to creating exceptional garments that reflect your unique style and personality.From classic designs to modern trends, we've been tailoring outfits that fit perfectly and make you stand out in any occasion</p>
                    <RouterLink to="/alterations" className={`d-flex align-items-center ${styles.leftContent} ${styles.collectionLink}`} >ALTERATIONS</RouterLink>
                </div>
            </div>

            <div className={styles.imageContainer3}>
                <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className={styles.image1} />
                <div
                    className={`${styles.overlay} ${overlayActive ? styles.active : ''}`}
                >
                    <h1 className={styles.title}>Schedule an Appointment</h1>
                    <p style={{color:'black'}}>Founded in [Year], our tailoring studio has been dedicated to creating exceptional garments that reflect your unique style and personality.From classic designs to modern trends, we've been tailoring outfits that fit perfectly and make you stand out in any occasion</p>
                    <RouterLink to="/contact"><button className={`btn btn-primary ${styles.actionButton}`}>
                        APPOINTMENT
                    </button></RouterLink>
                    <br></br>
                    <br></br>
                    <br></br>

                    <ul className={styles.contactinfo}>
                        <li>Needle Artistry</li>
                        <li>12345 67890</li>
                        <li>XYZ Colony, Proddatur, 516360</li>
                    </ul>
                    <ul className={styles.contactinfo}>
                        <li>10AM-7PM Monday-Friday</li>
                        <li>10AM-6PM Saturday-Sunday</li>
                        
                    </ul>
                </div>
            </div>

           



               
    
        </div>
    );
}

export default Home;

