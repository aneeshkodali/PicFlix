import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

import { socket } from './Header';

import SearchBar from './Image/SearchBar';
import ImageList from './Image/ImageList';
import { Link } from 'react-router-dom';

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

    if (!socket.roomname)
    {
        return (
            <div className="container text-center">
                <h1>No game found!</h1>
                <h4>
                    Consider
                    <Link to='/create-room'> creating </Link>
                    or
                    <Link to='/join-room'> joining </Link>
                    one!
                </h4>
            </div>
        )
    }
    else if (socket.roomname.length > 0)
    {
        return (
            <div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFunc={search} />
                <ImageList imagesData={imagesData} />
            </div>
        )
    }
    


};

export default Game;