import React from 'react';
import './Playlists.css';
import Playlist from './Playlist';

const lists = ["Custom", "Jazz", "Hiphop", "Classical", "Rock", "Pop"];

const Playlists = () => {
  const [ musiclists, setMusiclists ] = React.useState(lists);
  const [ grab, setGrab ] = React.useState<HTMLElement | null>(null);

  const onDragOver = (ev: React.DragEvent) => {
    ev.preventDefault();
  }

  const onDragStart = (ev: React.DragEvent, data: string) => {
    console.log("onDragStart");
    console.log(data);
    setGrab(ev.target as HTMLElement);
    ev.dataTransfer.setData("text/html", data);
    ev.dataTransfer.effectAllowed = "move";
  }

  const onDragEnd = (ev: React.DragEvent) => {
    console.log("onDragEnd");
    ev.dataTransfer.dropEffect = "move";
  }

  const onDrop = (ev: React.DragEvent) => {
    console.log("onDrop");
    let grabPos = Number(grab?.dataset.position);
    let targetPos = Number((ev.target as HTMLElement).dataset.position);
    
    let _musiclist = [ ...musiclists ];
    _musiclist[grabPos] = _musiclist.splice(targetPos, 1, _musiclist[grabPos])[0];

    setMusiclists(_musiclist);
  }

  return (
    <div className="playlists">
      <ul className="lists">
        {musiclists.map((name, index) => (
          <li
            key={index}

            draggable="true"

            onDragOver={ () => onDragOver }
            onDragStart={ () => onDragStart }
            onDragEnd={ () => onDragEnd }
            onDrop={ () => onDrop }
          >
            <Playlist name={ name } />
          </li>))}
      </ul>
    </div>
  )
}

export default Playlists;