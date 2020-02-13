import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import content from '../assets/content';

import routes from '../constants/routes';
import colors from '../constants/colors';
import styles from '../constants/defaultColorPageStyles';
import pages from '../constants/pages';
import images from '../constants/images';

const Yellow = () => {
    let location = useLocation()

    let parsedLocation = location.pathname.replace('/', '').toLowerCase();

    let title, description, artAlt, image, backgroundColor;

    if(pages.includes(parsedLocation)) {
        title = content[parsedLocation].title;
        description = content[parsedLocation].description;
        artAlt = content[parsedLocation].artAlt;
        image = images[parsedLocation]
        backgroundColor = colors[parsedLocation];
    } else {
        title = content.default.title;
        description = content.default.description;
        artAlt = content.default.artAlt;
        image = images.default;
        backgroundColor = colors.white;
    }

    return (
        <div style={{ ...styles.container, backgroundColor: backgroundColor }} >
            <div style={{ ...styles.backButtonContainer }}>
                <Link to={routes.default} style={{ ...styles.backButton }} >{'< Back'}</Link>
            </div>
            <div style={{ ...styles.titleContainer }} >
                <h1 style={{ ...styles.title }} >{title}</h1>
            </div>
            <div style={{ ...styles.descriptionContainer }} >
                <p style={{ ...styles.description }} >{description}</p>
            </div>
            <div style={{ ...styles.artContainer}} >
                <img src={image} alt={artAlt} style={{ ...styles.art }} />
            </div>
            <div style={{ ...styles.footerContainer }} >
                <p style={{ ...styles.footer }} >Images by cleanpng.com</p>
            </div>
        </div>
    )
}

export default Yellow
