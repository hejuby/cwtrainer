import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Playlists from './Components/Body/Playlists';

const App = () =>
  <div className="App">
    <div className="App-header">
      <Navbar />
    </div>
    <div className="App-body">
      <Playlists />
    </div>
  </div>

export default App;
