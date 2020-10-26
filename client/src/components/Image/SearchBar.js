import React, { useState } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, searchFunc }) => {

    const onFormSubmit = event => {
        event.preventDefault();
        searchFunc(searchTerm);
        setSearchTerm('');
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <input type="text" 
                        value={searchTerm} 
                        placeholder="Enter Search Term..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
        </div>
        )
};

export default SearchBar;