import React, { useState,useEffect } from 'react';
import classes from './Fabrics.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { Link as RouterLink } from "react-router-dom";
const images = [
    {
        link: "https://silverbobbin.com/wp-content/uploads/What-Is-Canvas-Fabric.jpg",
        title: 'Canvas'
    },
    {
        link: "https://cdn.shopify.com/s/files/1/0199/4862/articles/01-What-is-Cashmere.jpg?v=1607521637",
        title: 'Cashmere'
    },

    {
        link: "https://images.pexels.com/photos/6571744/pexels-photo-6571744.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: 'Chiffon'       
    },
    {
        link: "https://images.pexels.com/photos/7232397/pexels-photo-7232397.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: 'Cotton'
    },
    {
        link: "https://images.pexels.com/photos/7232413/pexels-photo-7232413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: 'Crepe'
    },
    {
        link: "https://images.pexels.com/photos/173207/pexels-photo-173207.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: 'Denim'
    },

    {
        link: "https://m.media-amazon.com/images/I/61nkfFAAshL.jpg",
        title: 'Georgette'
    },
    {
        link: "https://img.freepik.com/premium-photo/black-openwork-lace-background-texture-black-guipure-black-fabric-with-ornament-background-from-black-lace-with-pattern-with-form-flower_252591-1987.jpg?w=2000",
        title: 'Lace'
    },
    {
        link: "https://images.pexels.com/photos/1487713/pexels-photo-1487713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: 'Linen'
    },
    {
        link: "https://images.pexels.com/photos/3614132/pexels-photo-3614132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: 'Merino Wool'
    },
    {
        link: "https://m.media-amazon.com/images/I/91mHpI-jOWL._AC_UF1000,1000_QL80_.jpg",
        title: 'Organza'
    },
    {
        link: "https://images.clericitessuto.it/w:auto/h:auto/q:90/f:avif/https://shop.newtess.com/comceptw/img/micro-crepe-254-leggera-001-1.jpg",
        title: 'Polyester'
    },
    {
        link: "https://5.imimg.com/data5/SELLER/Default/2022/7/MU/LK/XX/24716651/rayon-fabric.jpg",
        title: 'Rayon'
    },
    {
        link: "https://images.pexels.com/photos/7676888/pexels-photo-7676888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: 'Satin'
    },
    {
        link: "https://suvetah.com/cdn/shop/products/Shot32WhiteFabricsMacrolr1500_3b3842b9-8849-4589-a1a8-14b6145cb87f.jpg?v=1638964498&width=1946",
        title: 'Silk'
    },
    {
        link: "https://buyfromturkey.co/wp-content/uploads/2022/04/taffetafabric1.jpg",
        title: 'Taffeta'
    },
    {
        link: "https://images.pexels.com/photos/6843282/pexels-photo-6843282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: 'Velvet'
    },
    {
        link: "https://silverbobbin.com/wp-content/uploads/Is-Viscose-Breathable-Fabric.jpg",
        title: 'Viscose'
    },
   
    
    
];
function Fabrics() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    const [overlayActive, setOverlayActive] = useState(false);

    useEffect(() => {
        // Enable overlay animation after a short delay
        const timeout = setTimeout(() => {
            setOverlayActive(true);
        }, 300); // Adjust the delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div className={classes.hero} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src="https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png" alt="Hero Image" className={classes.heroImage} />
                <div className={`${classes.overlay} ${hovered ? classes.showOverlay : ''}`}>
                    <h2 className={classes.connectText}>Fabrics</h2>
                </div>
            </div>
            <div className={classes.centeredContent}>
                
                <p>Their tasks mainly focus on custom-fitting but may also include the addition of collars or pockets. Alterations offer smaller adjustments that generally make clothing fit better. They are focused only on the adjustment of particular parts and perform simpler tasks such as hemming and shortening of sleeves or pant legs.</p>

            </div>
            <div>
                <Container >
                    <Row data-aos="zoom-in-down">
                    {images.map((img)=>(
                        <Col  className={classes.colSpace} xs={6} sm={4} md={3} lg={2}>
                            <img className={classes.imgFabric} src={img.link} alt='Fabric' ></img>
                            <p className={classes.para}>{img.title}</p>
                </Col>

                    ))}
                    
                    
                </Row>
            </Container>
            </div>
            
        </div>



    );
}

export default Fabrics;


