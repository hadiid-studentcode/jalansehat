import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

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
          <Col xs={6} sm={6} md={4} className="container-colum">
            <img
              src="./assets/img/img-1.png"
              className="img-fluid shadow-2-strong pl-5"
              alt="Image"
              style={{width: 350}}
            />
          </Col>
          <Col xs={6} sm={6} md={4} className="card-col">
            <p>
              <b>Jalan Sehat</b> adalah sistem informasi geografis yang
              menyajikan data spasial mengenai kondisi jalan yang
              diklasifikasikan berdasarkan tingkat kerusakannya.
            </p>
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

/* <Carousel>
<Carousel.Item className="m-0 p-0" zindex={1000}>
  <img
    className="d-block w-100"
    src="https://static.vecteezy.com/system/resources/previews/004/686/710/non_2x/green-color-country-map-indonesia-southeast-asia-flat-wide-background-illustration-free-vector.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>Perbaikan Jalan</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://static.vecteezy.com/system/resources/previews/004/686/716/non_2x/country-map-indonesia-southeast-asia-flat-wide-background-illustration-free-vector.jpg"
    alt="Third slide"
  />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel> */
/*
        <div className='p-0 m-0' style={Object.assign({background: 'rgb(196,221,209)', background: 'linear-gradient(360deg, rgba(196,221,209,1) 0%, rgba(233,246,240,1) 47%, rgba(237,245,241,1) 76%, rgba(243,243,243,1) 100%'})}>
          <Row className='container-name-adventags'>
            <Col>
              <h1>Keunggulan Jalan Sehat</h1>
            </Col>
          </Row>
          <Row className='container-row-adventags'>
            <Col xs={6} sm={6} md={4} className='card-col-adventags'>
              <h3>Fleksibel</h3>
              <p>Dapat diakses oleh siapa saja dan dimana saja.</p>

              <h3>Data Realtime</h3>
              <p>Temukan posisi Anda secara langsung dan pilih rute jalan terbaik yang Anda inginkan.</p>

              <h3>Laporkan Kerusakan Jalan</h3>
              <p>Informasikan kondisi ataupun kerusakan jalan dengan mudah dengan fitur <b>Laporkan Jalan Rusak</b>.</p>
            </Col>
            <Col xs={6} sm={6} md={4} className='container-colum'>
              <img
                src='./assets/img/phone-holding.png' // https://static.vecteezy.com/system/resources/previews/001/265/747/non_2x/blue-pin-in-showing-location-on-white-map-vector.jpg
                className='img-fluid shadow-2-strong rounded'
                alt='Image'
                style={{width: 600}}
              />
            </Col>
          </Row>
        </div>
         */
