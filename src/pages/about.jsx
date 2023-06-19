import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';

const teamsData = [
  {
    id: 1,
    image: '/assets/img/teams/dhiya.jpg',
    name: 'Dhiya Annisa Febriza',
    description: 'Universitas Islam Riau',
    twitter: '',
    github: '',
    instagram: 'https://www.instagram.com/annisadhyia/',
    lindkedin: 'https://www.linkedin.com/in/dhiyaannisafebriza/',
  },
  {
    id: 2,
    image: '/assets/img/teams/hadiid.jpg',
    name: 'Hadiid Andri Yulison',
    description: 'Universitas Muhammadiyah Riau',
    twitter: '',
    github: 'https://github.com/hadiid-studentcode',
    instagram: 'https://www.instagram.com/hadiidandriy12/',
    lindkedin: 'https://www.linkedin.com/in/hadiid-andri-yulison-984a69200/',
  },
  {
    id: 3,
    image: '/assets/img/teams/haidar.png',
    name: 'Haidar Fiki Rabani',
    description: 'STMIK AMIKOM Surakarta',
    twitter: '',
    github: 'https://github.com/fikirbn',
    instagram: '',
    lindkedin: '',
  },
  {
    id: 4,
    image: '/assets/img/teams/rais.jpg',
    name: 'Rais Adi Sutopo',
    description: 'STMIK AMIKOM Surakarta',
    twitter: '',
    github: 'https://github.com/raisadisutopo',
    instagram: '',
    lindkedin: '',
  },
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>JalanSehat | About Us</title>
      </Head>
      <section id="teams" className="block teams-block text-center" style={{display: 'flex', justifyContent: 'center', minHeight: '100vh'}}>
        <Container>
          <div className="title-holder">
            <h3 style={Object.assign({color: '#4C4C6D', fontWeight: 'bold'})}>Tentang Kami</h3>
            <h4 style={Object.assign({color: '#1B9C85', fontWeight: 'bold'})}>Berkenalan dengan Tim Kami</h4>
            <div className="subtitle pb-4" style={Object.assign({color: '#4C4C6D', opacity: '0.8'})}>Kami menyediakan fasilitas terbaik agar Anda dapat beraktivitas tanpa hambatan</div><br/>
          </div>
          <Row className="justify-content-md-center">
            {
              teamsData.map((teams) => {
                return (
                  <Col md={6} lg={3} key={teams.id} className="justify-content-md-center" data-aos="zoom-in-up" data-aos-duration="1000">
                    <Figure>
                      <Figure.Image rounded
                        width={280}
                        alt={teams.name}
                        src={teams.image}
                      />
                      <Figure.Caption className="pb-30">
                        <h6 style={Object.assign({color: '#4C4C6D', fontWeight: 'bold'})}>{teams.name}</h6>
                        <p className="mb-6" style={Object.assign({fontWeight: 'bold', color: '#F1C44F'})}>{teams.description}</p>
                        <div className="social m-auto">
                          <Link href={teams.github} target="__blank"><i className="bi bi-github" style={{fontSize: '18px', margin: '0 2px', color: '#4C4C6D'}}></i></Link>
                          <Link href={teams.instagram} target="__blank"><i className="bi bi-instagram" style={{fontSize: '18px', margin: '0 2px', color: '#4C4C6D'}}></i></Link>
                          <Link href={teams.lindkedin} target="__blank"><i className="bi bi-linkedin" style={{fontSize: '18px', margin: '0 2px', color: '#4C4C6D'}}></i></Link>
                        </div>
                      </Figure.Caption>
                    </Figure>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </section>
    </>

  );
};
