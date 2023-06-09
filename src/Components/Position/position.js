import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Maps.module.css';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from 'react-leaflet';

import {useState} from 'react';
import {useMapEvents} from 'react-leaflet/hooks';


function LocationMarker({posisi, onPositionChange}) {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onPositionChange(e.latlng);
    },
    dblclick(e) {
      map.locate();
    },

    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });



  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>
        hai aku disini
        </Popup>
      </Marker>
    </>
  );
}


export default function Position({posisi1, onPositionChange1}) {
  const [position, setPosition] = useState(null);

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
    onPositionChange1(newPosition);
  };
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

      <LocationMarker onPositionChange={handlePositionChange} />
    </MapContainer>
  );
}
