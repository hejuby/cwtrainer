import React from 'react';
import Playlist from './Playlist';

const Playlists = () => 
  <div className="playlists">
    <ul className="lists">
      {["Custom", "Jazz"].map((name, index) => (
        <li><Playlist name={ name }/></li>))}
    </ul>
  </div>

export default Playlists;