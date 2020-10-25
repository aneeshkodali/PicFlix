import React, { useState } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, searchFunc }) => {

    const onFormSubmit = event => {
        event.preventDefault();
        searchFunc(searchTerm);
        setSearchTerm('');
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
        )
};

export default SearchBar;