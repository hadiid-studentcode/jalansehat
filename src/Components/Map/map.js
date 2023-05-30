import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Maps.module.css';
import dynamic from 'next/dynamic';
import * as React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';


const ReactP5Wrapper = dynamic(
    () => import('@p5-wrapper/react').then((module) => module.ReactP5Wrapper),
    {ssr: false},
);



function sketch(p5) {
  p5.setup = () => p5.createCanvas(1090, 400).mouseClicked(mouseClicked);

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      p5.stroke(200);
    } else {
      p5.stroke(237, 34, 93);
    }
    p5.line(p5.mouseX - 66, p5.mouseY, p5.mouseX + 66, p5.mouseY);
    p5.line(p5.mouseX, p5.mouseY - 66, p5.mouseX, p5.mouseY + 66);
  };

  function mouseClicked() {
    console.log(`Clicked at(${p5.mouseX} X, ${p5.mouseY} Y)`);
  }
}

export default function Map() {
  const position = [0.4947968, 101.433344];

  return (
    <MapContainer
      className={style.map}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ReactP5Wrapper sketch={sketch} />

      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable. {position}
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}
