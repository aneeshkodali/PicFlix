import React from 'react';

const Image = ({ imageData, buttonProps }) => {
    const { alt_description, id, urls } = imageData;

    const { buttonText, buttonClass, buttonClick } = buttonProps;

    return (
        <div className="card">
            <img src={urls.thumb} alt={alt_description} style={{height: 128}}/>
            <button
                className={buttonClass}
                onClick={() => buttonClick(imageData)}>
                    {buttonText}
                </button>
        </div>
    )
};

export default Image;
