import React from 'react';

const ImageList = ({ imagesData }) => {

    const imageElems = imagesData.map(img => {
        const { alt_description, id, urls } = img;
        return (
                <div key={id} className="card">
                    <div className="image">
                        <img src={urls.thumb} alt={alt_description} />
                    </div>
                </div>
        )
    });

    return (
        <div className="ui cards">
            {imageElems}
        </div>
    )
};

export default ImageList;