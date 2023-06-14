import Head from 'next/head';
import '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>

      <Container fluid>
        <Row className="container-row-jumbotron">
          <Col xs={12} sm={12} md={6} lg={6} className="container-column">
            <center>
              <h2 className='text-name'>SELAMAT DATANG DI JALAN SEHAT</h2>
              <p className="text-desc">
                <b>Jalan Sehat</b> adalah sistem informasi geografis yang
                menyajikan data spasial mengenai kondisi jalan yang
                diklasifikasikan berdasarkan tingkat kerusakannya.
              </p>
            </center>
          </Col>
        </Row>
        <Row>
          <img
            src="./assets/img/line.png"
            className="img-fluid shadow-2-strong pl-5"
            style={{height: 10}}
          ></img>
        </Row>
        <center>
          <h1 className="header-video">Berawal dari Berbagai Laporan</h1>
          <p className="p-video-desc">
            Kami berinisiatif untuk melakukan perubahan dengan membuat sebuah
            aplikasi berbasis website sebagai sebuah solusi dari berbagai
            permasalah video dibawah ini
          </p>
          <div className="ctnr-crsl">
            <Carousel className="crsl" variant="dark">
              <Carousel.Item>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OeOngPhRyBY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/WUHDNwvkiOk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oWPG2avXVlE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Carousel.Item>
            </Carousel>
          </div>
        </center>
        <div className="advantage">
          <Container>
            <div className="advantage-title">
              <h2>Keunggulan Jalan Sehat</h2>
            </div>
            <Row>
              <Col lg={6}>
                <Card
                  className="mt-4 mb-20"
                  style={{
                    padding: '40px 30px',
                    borderRadius: 6,
                    background: '#fff',
                    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="d-flex">
                    <div>
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/black-box/64/tile-sorting-1024.png"
                        style={{width: '80px'}}
                        alt=""
                      />
                    </div>
                    <div className="adventage-desc">
                      <h4>Fleksibel</h4>
                      <p>
                        Akses Jalan Sehat kapanpun dan dimanapun dengan cepat &
                        mudah
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  className="mt-4 mb-20"
                  style={{
                    padding: '40px 30px',
                    borderRadius: 6,
                    background: '#fff',
                    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="d-flex">
                    <div>
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/multi-window-1024.png"
                        style={{width: '80px'}}
                        alt=""
                      />
                    </div>
                    <div className="adventage-desc">
                      <h4>Multiplatform</h4>
                      <p>
                        Anda dapat menjalankan Jalan Sehat di berbagai perangkat
                        Anda
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col className="mb-20" lg={6}>
                <Card
                  className="mt-4 mb-20"
                  style={{
                    padding: '40px 30px',
                    borderRadius: 6,
                    background: '#fff',
                    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="d-flex">
                    <div>
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded_2-52-1024.png"
                        style={{width: '80px'}}
                        alt=""
                      />
                    </div>
                    <div className="adventage-desc">
                      <h4>Data Realtime</h4>
                      <p>
                        Temukan posisi Anda secara langsung dan pilih rute jalan
                        terbaik yang Anda inginkan.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  className="mt-4 mb-20"
                  style={{
                    padding: '40px 30px',
                    borderRadius: 6,
                    background: '#fff',
                    boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="d-flex">
                    <div>
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Checkin01-1024.png"
                        style={{width: '80px'}}
                        alt=""
                      />
                    </div>
                    <div className="adventage-desc">
                      <h4>Laporkan Kerusakan Jalan</h4>
                      <p>
                        Informasikan kerusakan jalan dengan mudah dengan fitur{' '}
                        <b>Laporkan Jalan Rusak</b>.
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <center>
          <div className="ctnr-crsl">
            <h2 className="text-name">Our Tech</h2>
            <Carousel className="crsl" variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/img/next-js.png"
                  alt="First slide"
                />
                <Carousel.Caption className="caption-text">
                  <h3>Next.js</h3>
                  <p>
                    A powerful React framework for building web applications.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/img/react.png"
                  alt="Second slide"
                />
                <Carousel.Caption className="caption-text">
                  <h3>React</h3>
                  <p>A JavaScript library for building user interfaces.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/img/leaflet.png"
                  alt="Third slide"
                />
                <Carousel.Caption className="caption-text">
                  <h3>Leaflet</h3>
                  <p>Leaflet is the JavaScript library for interactive maps.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </center>
      </Container>
    </>
  );
}
