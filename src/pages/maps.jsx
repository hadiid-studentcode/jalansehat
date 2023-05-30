import Map from '../Components/Map';
import Position from '@/Components/Position';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Maps() {
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
        <Map/>
      </div>
      <Container>
        <Row>
          <Col className='mark-contrainer' >
            <button className='btn-laporan'>Laporkan Jalan Rusak</button>
            <ul>
              <li className='icon-red'>Kerusakan Tinggi</li>
              <li className='icon-yellow'>Kerusakan Sedang</li>
              <li className='icon-blue'>Sedang Perbaikan</li>
              <li className='icon-green'>Kondisi Jalan Bagus</li>
            </ul>
          </Col>
        </Row>


      </Container>

    </>
  );
}
