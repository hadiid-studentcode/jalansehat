import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function LoginPage() {
  return (
    <Form>
      <Card className="cardLogin">
        <Card.Body>
          <Form.Label className="labelLogin">Form Login</Form.Label>
          <Form.Group className="emailForm" controlId="formBasicEmail">
            <Form.Control
              className="emailInput"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="passwordForm" controlId="formBasicPassword">
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
        </Card.Body>
      </Card>
    </Form>

  );
}
