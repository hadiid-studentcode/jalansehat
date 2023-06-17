import Head from 'next/head';
import '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>

      <div className="container-jumbotron">
        <Container>
          <Row className="row-home">
            <Col className="side-left">
              <h2 className="text-name">SELAMAT DATANG DI JALAN SEHAT</h2>
              <center>
                <p className="text-desc">
                  <b>Jalan Sehat</b> adalah sistem informasi geografis yang
                  menyajikan data spasial mengenai kondisi jalan yang
                  diklasifikasikan berdasarkan tingkat kerusakannya.
                </p>
                <Button className="btn-selengkapnya">
                  Yuk ! Bantu Laporkan <i className="bi-box-arrow-in-right"></i>
                </Button>
              </center>
            </Col>
            <Col className="side-right">
              <img src="./assets/img/home-img.svg" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <svg
        className="gelombang"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#3d8361"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <Container fluid>
        <center>
          <h1 className="header-video">Berawal dari Berbagai Laporan</h1>
          <p className="p-video-desc">
            Kami berinisiatif untuk melakukan perubahan dengan membuat sebuah
            aplikasi berbasis website sebagai sebuah solusi dari berbagai
            permasalah video dibawah ini
          </p>
          <div className="ctnr-crsl-yt">
            <Carousel className="crsl" variant="dark">
              <Carousel.Item>
                <iframe
                  className="frame-yt"
                  src="https://www.youtube.com/embed/OeOngPhRyBY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  className="frame-yt"
                  src="https://www.youtube.com/embed/WUHDNwvkiOk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <iframe
                  className="frame-yt"
                  src="https://www.youtube.com/embed/oWPG2avXVlE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Carousel.Item>
            </Carousel>
          </div>
        </center>
        <div className="advantage">
          <Container>
            <div
              className="advantage-title"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2>Keunggulan Website Jalan Sehat</h2>
            </div>
            <Row data-aos-delay="300">
              <Col lg={6} data-aos="zoom-in-up" data-aos-duration="1000">
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
              <Col lg={6} data-aos="zoom-in-up" data-aos-duration="1000">
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
              <Col
                className="mb-20"
                lg={6}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
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
              <Col lg={6} data-aos="zoom-in-up" data-aos-duration="1000">
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
            <h2 className="text-name-tech">Our Tech</h2>
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
                  src="./assets/img/react-comp.png"
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
