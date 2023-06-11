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

      <div className="container-jumbotron">

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#3d8361" fillOpacity="1"
          d="M0,288L80,250.7C160,213,320,139,480,133.3C640,128,800,192,960,181.3C1120,171,1280,85,1360,42.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
      </svg>
      {/* <Row className='container-row-jumbotron'>
        <Col xs={12} sm={12} md={6} lg={6} className='image-colum-jum'>
          <img className='image-maps-jumbotron' src="./assets/img/maps.png" alt="" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className='container-colum'>
          <h2 className='text-name'>SELAMAT DATANG DI JALAN SEHAT</h2>
          <p className='text-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dignissimos sed tempora voluptatem culpa dolor! Animi adipisci in illo aperiam illum, sit iste, nisi vitae repudiandae officiis cupiditate laudantium doloribus!</p>
        </Col>
      </Row> */}

    </>
  );
}
