import Head from 'next/head';
import '../styles/Home.module.css';
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
        {/*
        <div className="advantage">
          <Container>
            <div className="advantage-title">
              <h2>Keunggulan Jalan Sehat</h2>
            </div>
            <Row>
              <Col lg={6}>
                <Card className="mt-4 mb-20" style={{padding: '40px 30px', borderRadius: 6, background: '#fff', boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)'}}>
                  <div className="d-flex">
                    <div><img src="https://cdn0.iconfinder.com/data/icons/black-box/64/tile-sorting-1024.png" style={{width: '80px'}}alt=""/></div>
                    <div className="adventage-desc">
                      <h4>Fleksibel</h4>
                      <p>Akses Jalan Sehat kapanpun dan dimanapun dengan cepat & mudah</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="mt-4 mb-20" style={{padding: '40px 30px', borderRadius: 6, background: '#fff', boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)'}}>
                  <div className="d-flex">
                    <div><img src="https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/multi-window-1024.png" style={{width: '80px'}}alt=""/></div>
                    <div className="adventage-desc">
                      <h4>Multiplatform</h4>
                      <p>Anda dapat menjalankan Jalan Sehat di berbagai perangkat Anda</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col className="mb-20" lg={6}>
                <Card className="mt-4 mb-20" style={{padding: '40px 30px', borderRadius: 6, background: '#fff', boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)'}}>
                  <div className="d-flex">
                    <div><img src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded_2-52-1024.png" style={{width: '80px'}}alt=""/></div>
                    <div className="adventage-desc">
                      <h4>Data Realtime</h4>
                      <p>Temukan posisi Anda secara langsung dan pilih rute jalan terbaik yang Anda inginkan.</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="mt-4 mb-20" style={{padding: '40px 30px', borderRadius: 6, background: '#fff', boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)'}}>
                  <div className="d-flex">
                    <div><img src="https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Checkin01-1024.png" style={{width: '80px'}}alt=""/></div>
                    <div className="adventage-desc">
                      <h4>Laporkan Kerusakan Jalan</h4>
                      <p>Informasikan kerusakan jalan dengan mudah dengan fitur <b>Laporkan Jalan Rusak</b>.</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
       */}
      </Container>
    </>
  );
}
