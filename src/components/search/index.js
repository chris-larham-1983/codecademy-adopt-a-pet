import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {

  // get the history object here
  const history = useHistory();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    if(searchQuery.trim().length === 5) { //if the 'searchQuery' equals 'name=' (i.e. there was no user input minus whitespace) then take no further action
        return;
    }

    //otherwise, imperatively redirect with history.push()
    history.push(`/search?${searchQuery}`);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
