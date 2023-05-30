/* eslint-disable react/jsx-key */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const teamData = [
  {
    id: 1,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Dhiya Annisa Febriza',
    description: 'Universitas Islam Riau',
  },
  {
    id: 2,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Hadiid Andri',
    description: 'Universitas Muhammadiyah Riau',
  },
  {
    id: 3,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Haidar Fiki',
    description: 'University',
  },
  {
    id: 4,
    image: 'https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw',
    name: 'Rais Adi Sutopo',
    description: 'University',
  },
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid='md'>
        <div className="title-holder text-center">
          <h2>About Us</h2>
          <h4>Berkenalan Dengan Tim Kami</h4>
          <div className="line"></div>
          <div className="subtitle">Lorem Ipsum</div><br></br>
        </div>
        <Row xs={1} md={4} className="m-10">
          {
            teamData.map((team) => {
              return (
                <Col sm={4} key={team.id} className='m'>
                  <div className='holder'>
                    <Card className='m-10'>
                      <Card.Img fluid variant="top" src={team.image}/>
                      <Card.Body className='text-center'>
                        <Card.Title>{team.name}</Card.Title>
                        <Card.Text>{team.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
/*
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={3} md={4} className="g-4 p-10">
      {Array.from({length: 4}).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample; */
/*
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

 function AboutUs() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg-light border text-center">
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw" width='100%' />
          <Card.Body>
            <Card.Title className='text-center'>Name</Card.Title>
            <Card.Text className='text-center'>University</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="bg-light border">
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw" width='100%' />
          <Card.Body>
            <Card.Title className='text-center'>Name</Card.Title>
            <Card.Text className='text-center'>University</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="bg-light border">
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src="https://play-lh.googleusercontent.com/rSDDfH3QSNW1zngBRYI1hu8datJ4XilnrW4LBEBf54knmzeW1XlRb4INHnDpm4JRPSg=w480-h960-rw" width='100%' />
          <Card.Body>
            <Card.Title className='text-center'>Name</Card.Title>
            <Card.Text className='text-center'>University</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Stack>
  );
}

export default AboutUs; */
