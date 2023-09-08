import React, { useState } from 'react';
import classes from './Contact.module.css';

function Contact() {
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
            <img src="https://in.apparelresources.com/wp-content/uploads/sites/3/2022/03/Government-eMarketplace-adds-Stitching-.jpg" alt="Hero Image" className={classes.heroImage} />
            <div className={`${classes.overlay} ${hovered ? classes.showOverlay : ''}`}>
                <h2 className={classes.connectText}>Let's Connect</h2>
            </div>
        </div>
            <div className={classes.mapContainer}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.731413602556!2d78.32358586785476!3d17.521045061758727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9279676f8f1d%3A0x6d53fb3b4ed44f8a!2sMiyapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1692616835464!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: '0' }} // Change this line
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>

        </div>
    );
}

export default Contact;
