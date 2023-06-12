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
      </Container>
    </>
  );
}
