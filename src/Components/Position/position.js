/* eslint-disable react/jsx-key */
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Maps.module.css';
import Image from 'next/image';

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

function LocationMarker({posisi, onPositionChange, onReport, onData}) {
  const [position, setPosition] = useState(null);
  const [positionNow, setPositionNow] = useState(null);
  const [reports, setReports] = useState(onReport);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onPositionChange(e.latlng);
    },
    dblclick(e) {
      map.locate();
    },

    locationfound(e) {
      setPositionNow(e.latlng);

      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null || positionNow === null ? null : (
    <>
      <LayerGroup>
        <Marker position={positionNow}>
          <Popup>hai aku disini</Popup>
        </Marker>
        <Circle center={positionNow} pathOptions="blue" radius={500} />
      </LayerGroup>

      <Marker position={position}>
        <Popup>tag disini aja yaa</Popup>
      </Marker>

      {
        // Render hasil pencarian jika data tersedia
        onData.map((r) => (
          <Marker key={r.id} position={[r.latitude, r.longitude]}>
            <Popup>
              {r.message}

              {r.foto && (
                <div style={{width: '300px', height: '300px'}}>
                  <Image
                    src={`https://grvmucznhugsfcaqgyge.supabase.co/storage/v1/object/public/jalanSehat/public/${r.foto}`}
                    alt="Foto"
                    layout="responsive"
                    width={300}
                    height={300}
                  />
                </div>
              )}
            </Popup>
          </Marker>
        ))
      }
    </>
  );
}

export default function Position({posisi1, onPositionChange1, onReport, onData}) {
  const [position, setPosition] = useState(null);
  const [report, setReport] = useState(onReport);

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

      <LocationMarker onPositionChange={handlePositionChange} onReport={report} onData={onData} />
    </MapContainer>
  );
}
