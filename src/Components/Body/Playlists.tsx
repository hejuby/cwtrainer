import React, { useState } from 'react';
import './Playlists.css';
import Playlist from './Playlist';

const lists = ["Custom", "Jazz", "Hiphop", "Classical", "Rock", "Pop"];

const Playlists: React.FunctionComponent = () => {
  const [ musiclists, setMusiclists ] = useState(lists);
  const [ grab, setGrab ] = useState<HTMLLIElement | null>(null);

  const onDragOver = (ev: React.DragEvent<HTMLLIElement>) => {
    ev.preventDefault();
  }

  const onDragStart = (ev: React.DragEvent<HTMLLIElement>) => {
    console.log(`ev.target: ${ev.target}, string: ${ev.target.toString()}`);
    setGrab(ev.target as HTMLLIElement);
    ev.dataTransfer.effectAllowed = "move";
  }

  const onDragEnd = (ev: React.DragEvent<HTMLLIElement>) => {
    ev.dataTransfer.dropEffect = "move";
  }

  const onDrop = (ev: React.DragEvent<HTMLLIElement>) => {
    const target = ev.target as HTMLLIElement;
    let grabPos = Number(grab?.dataset.position);
    let targetPos = Number(target.dataset.position);
    console.log(grab?.dataset);
    console.log(target.dataset);
    console.log(`${grabPos} ${targetPos}`);
    
    let _musiclist = [...musiclists];
    _musiclist[grabPos] = _musiclist.splice(targetPos, 1, _musiclist[grabPos])[0];

    setMusiclists(_musiclist);
    console.log(musiclists)
  }

  return (
    <div className="playlists">
      <ul className="lists">
        {musiclists.map((name, index) => (
          <li
            key={index}
            data-position={index}

            draggable="true"

            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
          >
            <Playlist name={name} />
          </li>))}
      </ul>
    </div>
  )
}

export default Playlists;