import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>
      <Container>
        <Row className='container-row-jumbotron'>
          <Col xs={12} sm={12} md={12} xxl={6} className='image-colum-jum'>
            <img className='image-maps-jumbotron' src="./assets/img/maps.png" alt="" />
            {/* <Image src='./assets/img/maps.png' alt='maps' width='100' height='100'></Image> */}
          </Col>
          <Col xs={12} sm={12} md={12} xxl={6} className='container-colum'>
            <h2 className='text-name'>SELAMAT DATANG DI JALAN SEHAT</h2>
            <p className='text-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dignissimos sed tempora voluptatem culpa dolor! Animi adipisci in illo aperiam illum, sit iste, nisi vitae repudiandae officiis cupiditate laudantium doloribus!</p>
          </Col>
        </Row>

        <Row className='container-row'>
          <Col sm={6} className='card-col'>
            <p>it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
          <Col sm={6} className='container-colum'>
            <h1>IMAGE MAPS</h1>
          </Col>
        </Row>
        <Row className='container-name-adventags'>
          <Col>
            <h1>Adventages</h1>
          </Col>
        </Row>
        <Row className='container-row-adventags'>
          <Col sm={6} className='card-col-adventags'>
            <h3>lorem ipsum</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur deserunt eum ut pariatur laboriosam! Quasi ipsam dignissimos, quisquam repudiandae odit nisi culpa vero ut quibusdam! Ipsam et maiores perferendis!</p>

            <h3>lorem ipsum</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur deserunt eum ut pariatur laboriosam! Quasi ipsam dignissimos, quisquam repudiandae odit nisi culpa vero ut quibusdam! Ipsam et maiores perferendis!</p>

            <h3>lorem ipsum</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur deserunt eum ut pariatur laboriosam! Quasi ipsam dignissimos, quisquam repudiandae odit nisi culpa vero ut quibusdam! Ipsam et maiores perferendis!</p>
          </Col>
          <Col sm={6} className='container-colum'>
            <h1>IMAGE MAPS</h1>
          </Col>
        </Row>
      </Container>

    </>
  );
}
