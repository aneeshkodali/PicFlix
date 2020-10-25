import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './Image/SearchBar';
import ImageList from './Image/ImageList';

const Game = () => {

    // state for search term
    const [searchTerm, setSearchTerm] = useState('');

    // state for images returned
    const [imagesData, setImagesData] = useState([]);


    // function to search for term
    const search = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });
        setImagesData(response.data.results);
    }

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFunc={search} />
            <ImageList imagesData={imagesData} />
        </div>
    )

};

export default Game;