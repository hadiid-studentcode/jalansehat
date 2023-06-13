import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>

      <Container fluid>
        <Row className="container-row-jumbotron">
          <Col xs={12} sm={12} md={6} lg={6} className="container-column">
            <h2 className="text-name">SELAMAT DATANG DI JALAN SEHAT</h2>
            <p className="text-desc">
              <b>Jalan Sehat</b> adalah sistem informasi geografis yang
              menyajikan data spasial mengenai kondisi jalan yang
              diklasifikasikan berdasarkan tingkat kerusakannya.
            </p>
          </Col>
        </Row>
        <Row>
          <img
            src="./assets/img/line.png"
            className="img-fluid shadow-2-strong pl-5"
            style={{height: 10}}
          ></img>
        </Row>
        <Row className="container-row">
          <Col xs={6} sm={3} md={4} lg={3} className="container-person-left">
            <div className="left-text">
              <p>Bantu kamu mencari jalan yang sehat untuk dilewati</p>
              <p>
                Berbagai laporan tentang jalan ada disini dan kamu dapat menjadi
                bagian darinya
              </p>
            </div>
          </Col>
          <Col xs={10} sm={10} md={4} lg={3} className="container-column">
            <img
              src="./assets/img/home.png"
              className="img-fluid shadow-2-strong pl-5"
              alt="Image"
            />
          </Col>
          <Col xs={6} sm={3} md={4} lg={3} className="container-person-left">
            <div className="left-right">
              <p>Semua laporan yang ada pada maps terupdate secara real time</p>
              <p>Agar perjalananmu di jalan lebih nyaman dan aman</p>
            </div>
          </Col>
        </Row>
        {/* <div className='p-0 m-0' style={Object.assign({background: 'rgb(196,221,209)', background: 'linear-gradient(360deg, rgba(196,221,209,1) 0%, rgba(233,246,240,1) 0%, rgba(237,245,241,1) 0%, rgba(243,243,243,1) 0%'})}>
          <Row className='container-name-adventags'>
            <Col>
              <h1>Keunggulan Jalan Sehat</h1>
            </Col>
          </Row>
          <Row className='container-row-adventags' style={Object.assign({background: 'rgb(196,221,209)', background: 'linear-gradient(360deg, rgba(196,221,209,1) 0%, rgba(233,246,240,1) 0%, rgba(237,245,241,1) 0%, rgba(243,243,243,1) 0%'})}>
            <Col xs={10} sm={6} md={5} className='card-col-adventags'>
              <h3>Fleksibel</h3>
              <p>Dapat diakses oleh siapa saja dan dimana saja.</p>

              <h3>Data Realtime</h3>
              <p>Temukan posisi Anda secara langsung dan pilih rute jalan terbaik yang Anda inginkan.</p>

              <h3>Laporkan Kerusakan Jalan</h3>
              <p>Informasikan kondisi ataupun kerusakan jalan dengan mudah dengan fitur <b>Laporkan Jalan Rusak</b>.</p>
            </Col>
            <Col xs={10} sm={6} md={5} className='container-colum'>
              <img
                src='./assets/img/phone-holding.png' // https://static.vecteezy.com/system/resources/previews/001/265/747/non_2x/blue-pin-in-showing-location-on-white-map-vector.jpg
                className='img-fluid shadow-2-strong rounded'
                alt='Image'
                style={{width: 600}}
              />
            </Col>
          </Row>
        </div> */}
      </Container>
    </>
  );
}
