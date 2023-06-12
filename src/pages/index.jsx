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

      <div className="header-jumbotron">

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3d8361" fillOpacity="1" d="M0,64L40,85.3C80,107,160,149,240,154.7C320,160,400,128,480,112C560,96,640,96,720,96C800,96,880,96,960,117.3C1040,139,1120,181,1200,170.7C1280,160,1360,96,1400,64L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </>
  );
}
