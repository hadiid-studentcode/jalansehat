import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

const teamsData = [
  {
    id: 1,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Dhiya Annisa Febriza',
    description: 'Universitas Islam Riau',
  },
  {
    id: 2,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Hadiid Andri Yulison',
    description: 'Universitas Muhammadiyah Riau',
  },
  {
    id: 3,
    image: './assets/img/teams/haidar.png',
    name: 'Haidar Fiki Rabani',
    description: 'STMIK AMIKOM Surakarta',
  },
  {
    id: 4,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Rais Adi Sutopo',
    description: 'STMIK AMIKOM Surakarta',
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>JalanSehat | Home</title>
      </Head>
      <section id="teams" className="block teams-block text-center">
        <Container>
          <div className="title-holder">
            <h3 style={Object.assign({color: '#4C4C6D', fontWeight: 'bold'})}>Tentang Kami</h3>
            <h4 style={Object.assign({color: '#1B9C85', fontWeight: 'bold'})}>Berkenalan dengan Tim Kami</h4>
            <hr className="line"></hr>
            <div className="subtitle pb-4" style={Object.assign({color: '#4C4C6D', opacity: '0.8'})}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <Row className="justify-content-md-center">
            {
              teamsData.map((teams) => {
                return (
                  <Col md={3} key={teams.id} className="justify-content-md-center">
                    <Figure>
                      <Figure.Image rounded
                        width={250}
                        alt={teams.name}
                        src={teams.image}
                      />
                      <Figure.Caption>
                        <h6 style={Object.assign({color: '#4C4C6D', fontWeight: 'bold'})}>{teams.name}</h6>
                        <p style={Object.assign({fontWeight: 'bold', color: '#F1C44F'})} /* className={styles.textYellow} */>{teams.description}</p>
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
