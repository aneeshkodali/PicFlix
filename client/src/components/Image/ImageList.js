import React from 'react';
import Image from './Image';

const ImageList = ({ imagesData, buttonProps }) => {

    const imageElems = imagesData.map(img => {
        return (
            <React.Fragment key={img.id}>
                <Image imageData={img} buttonProps={buttonProps}  />
            </React.Fragment>
        )
    });

    return (
        <div className="card-group">
            {imageElems}
        </div>
    )
};

export default ImageList;