import React, { useState } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, searchFunc }) => {

    const onFormSubmit = event => {
        event.preventDefault();
        searchFunc(searchTerm);
        setSearchTerm('');
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <input type="text" 
                        value={searchTerm} 
                        placeholder="Enter Search Term..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="ui button" onSubmit={onFormSubmit}>Search</button>
                </div>
            </form>
        </div>
        )
};

export default SearchBar;