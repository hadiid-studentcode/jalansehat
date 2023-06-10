import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function RegisterPage() {
  return (
    <Form>
      <Container>
        <Row className="container-row-register">
          <Col xs={12} sm={12} md={8} xxl={6} className="container-left">
            <div className="container-img-register">
              <img
                className="img-login"
                src="./assets/img/img-login.png"
                alt=""
              />
              <h2 className="h2-login">Holla, come join us!</h2>
              <p className="p-login">
                Mari berkontribusi untuk memberikan Jalan yang sehat untuk
                Indonesia.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} xxl={6} className="container-right">
            <div className="container-form">
              <Form.Label className="labelLogin">Form Daftar</Form.Label>
              <Form.Group className="emailForm" controlId="formBasicUsername">
                <Form.Control
                  className="nameInput"
                  type="string"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="emailForm" controlId="formBasicNumber">
                <Form.Control
                  className="numberInput"
                  type="string"
                  placeholder="Enter Number"
                />
              </Form.Group>
              <Form.Group className="emailForm" controlId="formBasicEmail">
                <Form.Control
                  className="emailInput"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                className="passwordForm"
                controlId="formBasicPassword"
              >
                <Form.Control
                  className="passwordInput"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group>
                <Button className="buttonSubmit " type="submit">
                  Daftar
                </Button>
              </Form.Group>
              <Link className="linkDaftar" href="/login">
                Sudah memiliki akun?
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
