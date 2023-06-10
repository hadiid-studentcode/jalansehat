import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function LoginPage() {
  return (
    <Form>
      <Container>
        <Row className="container-row-login">
          <Col xs={12} sm={12} md={12} xxl={6} className="container-left">
            <div className="container-img-login">
              <img
                className="img-login"
                src="./assets/img/img-login.png"
                alt=""
              />
              <h2 className="h2-login">Holla, come join us!</h2>
              <p className="p-login">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} xxl={6} className="container-right">
            <div className="container-form">
              <img
                className="img-login-key"
                src="./assets/img/key-login.png"
                alt=""
              />
              {/* <Form.Label className="labelLogin">Form Login</Form.Label> */}
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
                  Masuk
                </Button>
              </Form.Group>
              <Link className="linkDaftar" href="/register">
                Belum memiliki akun?
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
