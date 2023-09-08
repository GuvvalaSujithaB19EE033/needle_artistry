import React, { useState } from 'react';
import classes from './Alterations.module.css';

function Alterations() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div>
        <div className={classes.hero} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src="https://hellolaundry.co.uk/wp-content/uploads/2021/12/clothing-alteration-service-london.jpeg" alt="Hero Image" className={classes.heroImage} />
            <div className={`${classes.overlay} ${hovered ? classes.showOverlay : ''}`}>
                <h2 className={classes.connectText}>Alterations</h2>
            </div>
        </div>
            <div className={classes.centeredContent}>
                <h1 style={{ fontFamily: 'Snell Roundhand,cursive',fontWeight:'bold'}}>Kids</h1>
                <p>Their tasks mainly focus on custom-fitting but may also include the addition of collars or pockets. Alterations offer smaller adjustments that generally make clothing fit better. They are focused only on the adjustment of particular parts and perform simpler tasks such as hemming and shortening of sleeves or pant legs.</p>
                <h1 style={{ fontFamily: 'Snell Roundhand,cursive', fontWeight: 'bold' }}>Women</h1>
                <p>Their tasks mainly focus on custom-fitting but may also include the addition of collars or pockets. Alterations offer smaller adjustments that generally make clothing fit better. They are focused only on the adjustment of particular parts and perform simpler tasks such as hemming and shortening of sleeves or pant legs.</p>
        </div>
        </div>
            


    );
}

export default Alterations;


