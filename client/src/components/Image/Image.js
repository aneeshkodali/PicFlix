import React from 'react';

const Image = ({ imageData }) => {
    const { alt_description, id, urls } = imageData;

    return (
        <div className="card">
            <div className="image">
                <img src={urls.thumb} alt={alt_description} />
            </div>
        </div>
    )
};

export default Image;
