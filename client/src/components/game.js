import React, { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';

import { socket } from './Header/Header';

import SearchBar from './Image/SearchBar';
import ImageList from './Image/ImageList';
import PlayerList from './playerList';
import Chat from "./Chat/chat";

import { Link } from 'react-router-dom';

// limit to number of images selected
const IMAGE_LIMIT = 3;

class Game extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            searchTerm: '',
            imagesData: [],
            imagesSelected: [],
        }

            // button properties for 'adding movie to' and 'removing movie from' movies selected
        this.buttonProps = {
            'addMovie': {
                'buttonText': 'Add',
                'buttonClass': 'btn btn-success',
                'buttonClick': this.addImage
            },
            'removeMovie': {
                'buttonText': 'Remove',
                'buttonClass': 'btn btn-danger',
                'buttonClick': this.removeImage
            }
        }

        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.addImage = this.addImage.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.search = this.search.bind(this);

        socket.on('image added', (data) => 
        {
            if (this.state.imagesSelected.includes(data.image) || this.state.imagesSelected[data.image.id] || this.state.imagesSelected.length >= IMAGE_LIMIT) {
                return
            };

            var images = this.state.imagesSelected;
            var index = images.push(data.image)

            this.setState({imagesSelected: images});
    
        });

        socket.on('image removed', (data) =>
        {
            this.setState({imagesSelected: this.state.imagesSelected.filter(img => img.id !== data.image.id)})
        });
    }

    // set Search Term to send out to image API
    setSearchTerm(value)
    {
        this.setState({searchTerm: value})
    }

     // function to add image to list of selected images
    addImage(image)
    {
        // if (this.state.imagesSelected.includes(image) || this.state.imagesSelected.length >= IMAGE_LIMIT) {
        //     return
        // };
        
        // broadcast our image
        socket.emit('add image', {imageData: image, roomid: socket.roomname});
    }


    // function to remove image from list of selected images
    removeImage(image){
        socket.emit('remove image', {imageData: image, roomid: socket.roomname});
    }

    // function to search for term
    async search(term)
    {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({imagesData: response.data.results})
    }

    // setup socket things
    componentDidMount()
    {

        //this.forceUpdate();
    }




    render()
    {
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
                <div className="container">
                    {/* Image Screen */}
                    <p>Room ID: {socket.roomname}</p>
                    <div className="row content-justify-center">
                        <div className="col-9">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Current Images: {this.state.imagesSelected.length} (MAX {IMAGE_LIMIT})</h5>
                                </div>
                                {/*<img src="https://picsum.photos/200" className="rounded mx-auto d-block mt-1 mb-1" alt="..."></img>*/}
                                <ImageList imagesData={this.state.imagesSelected} buttonProps={this.buttonProps.removeMovie} />
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

                    {socket.isHost &&
                        <div>
                            <div className="row content-justify-center">
                                <div className="col-9 mt-5">
                                    <SearchBar searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} searchFunc={this.search} />
                                </div>
                            </div>

                            <div className="row content-justify-center">
                                <div className="col-12 mt-2">
                                    <ImageList imagesData={this.state.imagesData} buttonProps={this.buttonProps.addMovie} />
                                </div>
                            </div>

                        </div>
                    }


                    {/*  Chat Log/Guess Log */}
                    <div className="row content-justify-center">
                        <div className="col-9 mt-5">
                            <div className="card">
                                <Chat></Chat>
                            </div>
                        </div>

                    </div>

                </div>
            )
        }
    };

    
    


};

export default Game;