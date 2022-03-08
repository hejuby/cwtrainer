import React from 'react';
import './Playlist.css';

type AppProps = {
  name: string;
};

const Playlist = ({name}: AppProps): JSX.Element =>
  <div className="playlist">
    <h1>Playlist {name}</h1>
  </div>

export default Playlist;