import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

import ImageList from './Image/ImageList';

const Game = () => {

    // state for search term
    const [searchTerm, setSearchTerm] = useState('');

    // state for images returned
    const [imagesData, setImagesData] = useState([]);
    useEffect(() => {


        const search = async (term) => {
            const response = await unsplash.get('/search/photos', {
                params: {query: term}
            });
            setImagesData(response.data.results);
        }
        search('dog');
    }, []);



    return (
        <div>
            <ImageList imagesData={imagesData} />
        </div>
    )

};

export default Game;