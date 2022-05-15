import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Search.css';

function Search() {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    alert('SUBMISSION RECIEVED! JUST KIDDING.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container className="searchbar">
        <Row>
          {/* <img id="baricon" src={baricon}></img> */}
          <button type="button" id="menu"/>
          <input
            placeholder="Search"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {/* <img id="searchicon" src={searchicon}></img> */}
          <button type="button" id="search"/>
        </Row>
      </Container>
    </form>
  );
}

export default Search;
