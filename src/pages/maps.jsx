import Position from '@/Components/Position';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';


export default function Maps() {
  const [position, setPosition] = useState(null);

  const handlePositionChange1 = (newPosition1) => {
    setPosition(newPosition1);

    console.log(`lat maps: ${newPosition1.lat}, lng maps: ${newPosition1.lng}`);
  };
  return (
    <>
      <Head>
        <title>JalanSehat | Maps</title>
      </Head>

      <div className='header-map'>
        <h3>LAPORAN JALAN RUSAK</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime architecto exercitationem porro impedit illo qui, laudantium quo quibusdam provident modi reiciendis ea ab consequatur quae numquam quas expedita sint.</p>
      </div>

      <div className='map-container'>
        <Position onPositionChange1={handlePositionChange1} />
      </div>

      {/* <div className="container-footer-map">
        <Row className='row-footer-map'>
          <Col sm={6} className='col-footer-map'>
            <button className='btn-laporan'>Laporkan Jalan Rusak</button>
          </Col>
          <Col sm={6} >
            <ul>
              <li className='icon-red'>Kerusakan Tinggi</li>
              <li className='icon-yellow'>Kerusakan Sedang</li>
              <li className='icon-blue'>Sedang Perbaikan</li>
              <li className='icon-green'>Kondisi Jalan Bagus</li>
            </ul>
          </Col>
        </Row>
      </div> */}
      <div className="container-footer-map">

        <button className='btn-laporan'>Laporkan Jalan Rusak</button>

        <div className="list-mark">
          <ul>
            <li className='icon-red'>Kerusakan Tinggi</li>
            <li className='icon-yellow'>Kerusakan Sedang</li>
            <li className='icon-blue'>Sedang Perbaikan</li>
            <li className='icon-green'>Kondisi Jalan Bagus</li>
          </ul>
        </div>

      </div>


    </>
  );
}
