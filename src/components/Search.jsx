import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    alert('SUBMISSION RECIEVED! JUST KIDDING.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
