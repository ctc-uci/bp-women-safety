import React from 'react';
import { useState } from 'react';

import baricon from '../images/baricon.png';
import searchicon from '../images/searchicon.png';
import './Search.css';

function Search() {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    alert('SUBMISSION RECIEVED! JUST KIDDING.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="searchbar">
        <input
          placeholder="Search"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
