import React, { useState } from 'react';
import './Playlists.css';
import Playlist from './Playlist';

const lists = ["Custom", "Jazz", "Hiphop", "Classical", "Rock", "Pop"];

const Playlists = (): JSX.Element => {
  const [ musiclists, setMusiclists ] = useState(lists);
  const [ grab, setGrab ] = useState<HTMLLIElement | null>(null);

  const onDragOver = (ev: any) => {
    ev.preventDefault();
  }

  const onDragStart = (ev: any) => {
    console.log(`ev.target: ${ev.target}, string: ${ev.target.toString()}`);
    setGrab(ev.target);
    ev.target.style.opacity = '0.5';
    ev.dataTransfer.effectAllowed = "move";
  }

  const onDragEnd = (ev: any) => {
    ev.target.style.opacity = '1';
    ev.dataTransfer.dropEffect = "move";
  }

  const onDrop = (ev: any) => {
    let grabPos = Number(grab?.dataset.position);
    let targetPos = Number((ev.target as HTMLLIElement).dataset.position);
    console.log(`ev.target is HTMLLIElement: ${(ev.target as HTMLLIElement) instanceof HTMLLIElement}`);
    console.log(grab?.dataset);
    console.log((ev.target as HTMLLIElement).dataset);
    console.log(`${grabPos} ${targetPos}`);
    
    let _musiclist = [...musiclists];
    _musiclist[grabPos] = _musiclist.splice(targetPos, 1, _musiclist[grabPos])[0];

    setMusiclists(_musiclist);
    console.log(musiclists);
  }

  return (
    <div className="playlists">
      <div className="container">
        {musiclists.map((name, index) => (
          <div className="box"
            key={index}
            data-position={index}

            draggable="true"

            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
          >
            <Playlist name={name}/>
          </div>))}
      </div>
    </div>
  )
}

export default Playlists;