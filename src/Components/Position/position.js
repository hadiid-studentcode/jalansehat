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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import {divIcon} from 'leaflet';

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

  // Definisikan ikon marker sesuai kebutuhan Anda
  const highDamage = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
`,
  });
  const intermediateDamage = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="yellow" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
`,
  });

  const goodRoadCondition = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
`,
  });
  const moderateImprovement = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
`,
  });

  // ...
  const getIconByDamageType = (jenisKerusakan) => {
    if (jenisKerusakan === 'Kerusakan Tinggi') {
      return highDamage;
    } else if (jenisKerusakan === 'Kerusakan Sedang') {
      return intermediateDamage;
    } else if (jenisKerusakan === 'Sedang Perbaikan') {
      return moderateImprovement;
    } else {
      return goodRoadCondition;
    }
  };

  return position === null || positionNow === null ? null : (
    <>
      <LayerGroup>
        <Marker position={positionNow}>
          <Popup>Hello Saya Disini</Popup>
        </Marker>
        <Circle center={positionNow} pathOptions="blue" radius={500} />
      </LayerGroup>

      <Marker position={position}>
        <Popup>tag disini aja yaa</Popup>
      </Marker>

      {
        // Render hasil pencarian jika data tersedia
        onData.map((r) => (
          <Marker
            key={r.id}
            position={[r.latitude, r.longitude]}
            icon={getIconByDamageType(r.jenisKerusakan)}
          >
            <Popup>
              <Card style={{width: '18rem'}}>
                {r.foto && (
                  <Card.Img
                    variant="top"
                    src={`https://grvmucznhugsfcaqgyge.supabase.co/storage/v1/object/public/jalanSehat/public/${r.foto}`}
                  />
                )}
                <Card.Body>
                  <Card.Title>{r.jenisKerusakan} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {r.nama}
                  </Card.Subtitle>
                  <Card.Text>{r.message}</Card.Text>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${r.latitude},${r.longitude}`}
                    target="_blank"
                  >
                    {' '}
                    <Button variant="success">Go Location</Button>
                  </Link>
                </Card.Body>
              </Card>
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
      center={{lat: -6.17541430761225, lng: 106.82717353105548}}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker
        onPositionChange={handlePositionChange}
        onReport={report}
        onData={onData}
      />
    </MapContainer>
  );
}
