import React from 'react';
import './style.css';

const Image = (props) => {
    const {
        poster_path,
        alt,
    } = props;

    const src = `${process.env.REACT_APP_IMAGE_URL}${poster_path}`;

    return (
        <img className="images" src={src} alt={alt} />
    );
};

export default Image;
