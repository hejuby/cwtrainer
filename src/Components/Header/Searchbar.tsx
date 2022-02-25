import React from 'react';

const Searchbar = () =>
  <div className="searchbar">
    <input type="text" list="playlist-options" />
    <datalist id="playlist-options">
      <option value="Playlist1" />
    </datalist>
    <button>Search</button>
  </div>

export default Searchbar;