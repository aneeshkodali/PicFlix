import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, searchFunc }) => {

    const onFormSubmit = event => {
        event.preventDefault();
        searchFunc(searchTerm);
        setSearchTerm('');
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="input-group">
                    <input type="text"
                        className="form-control"
                        value={searchTerm} 
                        placeholder="Enter Search Term..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary ml-1" type="submit">Search Images</button>
                </div>
            </form>
        </div>
        )
};

export default SearchBar;