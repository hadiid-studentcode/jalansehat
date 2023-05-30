import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Maps.module.css';

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import {useState} from 'react';
import {useMapEvents} from 'react-leaflet/hooks';



export default function Position() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    console.log(position);
    const test = position;


    const simpan = (value) => {
      console.log(value.lat);
    };



    return position === null ? null : (
      <Marker position={position}>
        <Popup><button onClick={()=>simpan(position)}>Simpan</button></Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      className={style.map}
      center={{lat: 51.505, lng: -0.09}}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />

    </MapContainer>
  );
}
