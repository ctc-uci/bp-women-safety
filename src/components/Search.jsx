import React from 'react';
import { useState } from 'react';

import baricon from '../images/baricon.png';
import searchicon from '../images/searchicon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Search.css';

function Search() {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    alert('SUBMISSION RECIEVED! JUST KIDDING.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container className="searchbar">
        <Row>
          <img id="baricon" src={baricon}></img>
          <input
            placeholder="Search"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <img id="searchicon" src={searchicon}></img>
        </Row>
      </Container>
    </form>
  );
}

export default Search;
