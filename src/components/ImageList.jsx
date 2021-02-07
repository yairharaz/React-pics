import React from 'react';
import './ImageList.css';
import ImgCard from './ImgCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImgCard key={image.id} image={image} />
    });

    return (
        <div className="image-list">{images}</div>
    )
};

export default ImageList;
