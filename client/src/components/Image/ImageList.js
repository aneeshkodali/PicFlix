import React from 'react';
import Image from './Image';

const ImageList = ({ imagesData }) => {

    const imageElems = imagesData.map(img => {
        return <Image key={img.id} imageData={img} />
    });

    return (
        <div className="ui cards">
            {imageElems}
        </div>
    )
};

export default ImageList;