import React from 'react';
import './Playlists.css';
import Playlist from './Playlist';

const onDragOver = (ev: DragEvent) => {
  ev.preventDefault();
  console.log("onDragover");
}

const onDragStart = () => {
  console.log("onDragStart");
}

const onDragEnd = () => {
  console.log("onDragEnd");
}

const onDrop = () => {
  console.log("onDrop");
}

const Playlists = () => 
  <div className="playlists">
    <ul className="lists">
      {["Custom", "Jazz", "Hiphop", "Classical", "Rock", "Pop"].map((name, index) => (
        <li
          key={index}
          
          draggable="true"
          
          onDragOver={ () => onDragOver }
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
        >
          <Playlist name={ name } />
        </li>))}
    </ul>
  </div>

export default Playlists;