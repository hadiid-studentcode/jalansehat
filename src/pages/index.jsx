import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>

      <Container fluid>
        <Row className="container-row-jumbotron">
          {/* <Col xs={12} sm={12} md={6} lg={6} className='image-colum-jum'>
            <img className='image-maps-jumbotron' src="./assets/img/maps.png" alt="" />
            <Image src='./assets/img/maps.png' alt='maps' width='100' height='100'></Image>
          </Col> */}
          <Col xs={12} sm={12} md={6} lg={6} className="container-colum">
            <h2 className="text-name">SELAMAT DATANG DI JALAN SEHAT</h2>
            <p className="text-desc">
              <b>Jalan Sehat</b> adalah sistem informasi geografis yang
              menyajikan data spasial mengenai kondisi jalan yang
              diklasifikasikan berdasarkan tingkat kerusakannya.
            </p>
          </Col>
        </Row>
        <Row className="container-row">
          <Col xs={2} sm={3} md={4} lg={3} className="container-person-left">
            <div className="left-text">
              <p>Ini adalah kami yang sedang menerima laporan dari kamu</p>
            </div>
          </Col>
          <Col xs={6} sm={3} md={4} lg={3} className="container-colum">
            <img
              src="./assets/img/home.png"
              className="img-fluid shadow-2-strong pl-5"
              alt="Image"
              style={{width: 350}}
            />
          </Col>
          <Col xs={2} sm={3} md={4} lg={3} className="container-person-left">
            <div className="left-right">
              <p>Ini adalah kami yang sedang menerima laporan dari kamu</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
