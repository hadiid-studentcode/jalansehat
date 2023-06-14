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

import {useState, useEffect} from 'react';
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

      map.flyTo(e.latlng, map.getZoom() + 2);
    },
  });

  useEffect(() => {
    map.locate();
  }, []);


  // Definisikan ikon marker sesuai kebutuhan Anda
  const highDamage = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="#CD1818" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
`,
  });
  const intermediateDamage = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="#F49D1A" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
`,
  });

  const goodRoadCondition = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="#5D9C59" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
`,
  });
  const moderateImprovement = divIcon({
    className: 'custom-icon',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="#3E6D9C" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
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
              <Card className='card-maps'>
                {r.foto && (
                  <Card.Img className='img-maps'
                    variant="top"
                    src={`https://grvmucznhugsfcaqgyge.supabase.co/storage/v1/object/public/jalanSehat/public/${r.foto}`}
                    height="300px"

                  />
                )}
                <Card.Body className='card-body-maps'>
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
                    <Button className='btn-maps' variant="success">Go Location</Button>
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
