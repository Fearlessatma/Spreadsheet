import React from 'react';
import useStore from '../store/useStore';

const Search = () => {
  const [query, setQuery] = React.useState('');
  const { cells } = useStore();

  const filteredCells = cells.map((cell, index) => cell.includes(query) ? index : null).filter(index => index !== null);

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search cells..."
        className="border p-2 w-full"
      />
      <div>
        {filteredCells.length} cells found
      </div>
    </div>
  );
};

export default Search;
