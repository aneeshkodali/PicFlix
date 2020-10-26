import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

import { socket } from './Header';

import SearchBar from './Image/SearchBar';
import ImageList from './Image/ImageList';
import PlayerList from './PlayerList';

import { Link } from 'react-router-dom';

const Game = () => {

    // state for search term
    const [searchTerm, setSearchTerm] = useState('');

    // state for images returned
    const [imagesData, setImagesData] = useState([]);

    // state for images currently selected
    const [imagesSelected, setImagesSelected] = useState([]);

    // function to add image to list of selected images
    const addImage = (image) => {
        setImagesSelected([...imagesSelected, image]);
        console.log(imagesSelected);
    };

    // function to remove image from list of selected images
    const removeImage = (image) => {
        setImagesSelected(imagesSelected.filter(img => img !== image));
    }

    // function to search for term
    const search = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });
        setImagesData(response.data.results);
    }

    // button properties for 'adding movie to' and 'removing movie from' movies selected
    const buttonProps = {
        'addMovie': {
            'buttonText': "Add",
            'buttonClass': "mini ui positive button icon",
            'buttonClick': addImage
        },
        'remove movie': {
            'buttonText': 'Remove',
            'buttonClass': 'mini ui negative button icon',
            'buttonClick': removeImage
        }
    }

    //if (!socket.roomname)
    //{
    //    return (
    //        <div className="container text-center">
    //            <h1>No game found!</h1>
    //            <h4>
    //                Consider
    //                <Link to='/create-room'> creating </Link>
    //                or
    //                <Link to='/join-room'> joining </Link>
    //                one!
    //            </h4>
    //        </div>
    //    )
    //}
    //else if (socket.roomname.length > 0)
    //{
        return (
            <div className="container">
                {/* Image Screen */}
                <p>Room ID: {socket.roomname}</p>
                <div className="row content-justify-center">
                    <div className="col-9">
                        <div className="card">
                            <div className="card-header">
                                <h5>Current Image</h5>
                            </div>
                            <img src="https://picsum.photos/200" className="rounded mx-auto d-block mt-1 mb-1" alt="..."></img>
                        </div>
                    </div>

                    {/* Player List */}
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">
                                <h5>Player List</h5>
                                <PlayerList/>
                            </div>
                        </div>
                        <div className="row mt-1 mx-auto">
                            <button className="btn btn-primary mr-1">Leave Game</button>
                            <button className="btn btn-secondary mr-1">Read Guide</button>
                        </div>
                    </div>

                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchFunc={search} />
                <ImageList imagesData={imagesData} buttonProps={buttonProps.addMovie} />

                {/*  Chat Log/Guess Log */}
                <div className="row content-justify-center">
                    <div className="col-9 mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h5>Chat</h5>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    //}
    


};

export default Game;