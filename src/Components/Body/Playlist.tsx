import React from 'react';
import './Playlist.css';

let posX = 0;
let posY = 0;

let originalX = 0;
let originalY = 0;

const dragStartHandler = (e: DragEvent) => {
  const img = new Image();
  e.dataTransfer.setDragImage(img, 0, 0);
  
  posX = e.clientX;
  posY = e.clientY;
  
  originalX = e.target.offsetLeft;
  originalY = e.target.offsetTop;
};

const dragHandler = (e: DragEvent) => {
  e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
  e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
  posX = e.clientX;
  posY = e.clientY;
};

const dragEndHandler = (e: DragEvent) => {
  if (
    box.left < e.clientX &&
    e.clientX < box.right &&
    box.top < e.clientY &&
    e.clientY < box.bottom
  ) {
    setTargets(targets => {
      const newTargets = [...targets];
      newTargets.push({
        id: parseInt(e.timeStamp),
        top: e.target.offsetTop + e.clientY - posY,
        left: e.target.offsetLeft + e.clientX - posX,
        details: STOCK_DATA[e.target.id],
      });
      return newTargets;
    });
  }

  e.target.style.left = `${originalX}px`;
  e.target.style.top = `${originalY}px`;
};

const Playlist = () =>
  <div className="playlist" draggable="true" onDragStart={this.dragStartHandler} onDrag={this.dragHandler} onDragEnd={this.dragEndHandler} >
    <h1>Playlist</h1>
  </div>

export default Playlist;