import React from 'react';
import Image from './Image';

const ImageList = ({ imagesData, buttonProps }) => {

    const imageElems = imagesData.map(img => {
        return (
            <React.Fragment key={img.id}>
                <Image imageData={img} buttonProps={buttonProps} />
            </React.Fragment>
        )
    });

    return (
        <div className="ui five cards">
            {imageElems}
        </div>
    )
};

export default ImageList;