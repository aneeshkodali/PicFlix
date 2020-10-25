import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

const Game = () => {

    const [imagesData, setImagesData] = useState([])
    useEffect(() => {

        const search = async (term) => {
            const response = await unsplash.get('/search/photos', {
                params: {query: term}
            });
            setImagesData(response.data.results);
        }
        search('campaign');
    }, []);

    const imageElems = imagesData.map(img => {
        const { alt_description, id, urls } = img;
        return <img key={id} src={urls.thumb} alt={alt_description} />
    })

    return (
        <div>
            {imageElems}
        </div>
    )

};

export default Game;