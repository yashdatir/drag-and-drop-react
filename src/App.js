import React from 'react';
import Image from './Image';
export default function App() {
  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
  };
  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  };
  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '300px',
          padding: '10px',
          border: '1px solid #aaaaaa',
          float: 'left',
        }}
        id="div1"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      ></div>
      <div
        style={{
          width: '200px',
          height: '300px',
          padding: '10px',
          border: '1px solid #aaaaaa',
          float: 'left',
        }}
        id="div2"
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      ></div>
      <Image draggable={true} onDragStart={(e) => drag(e)} />
    </div>
  );
}
