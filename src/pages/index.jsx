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

.container-jumbro
      <Row className='container-row-jumbotron'>
        <Col xs={12} sm={12} md={6} lg={6} className='image-colum-jum'>
          <img className='image-maps-jumbotron' src="./assets/img/maps.png" alt="" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className='container-colum'>
          <h2 className='text-name'>SELAMAT DATANG DI JALAN SEHAT</h2>
          <p className='text-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dignissimos sed tempora voluptatem culpa dolor! Animi adipisci in illo aperiam illum, sit iste, nisi vitae repudiandae officiis cupiditate laudantium doloribus!</p>
        </Col>
      </Row>

    </>
  );
}
