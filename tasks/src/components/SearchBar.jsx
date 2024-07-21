import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" onChange={handleChange} placeholder="Axtarış..." />
    </div>
  );
};

export default SearchBar;
