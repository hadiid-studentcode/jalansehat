import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function RegisterPage() {
  return (
    <Form>
      <Card className="cardLogin">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
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
          <Form.Group className="passwordForm" controlId="formBasicPassword">
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
        </Card.Body>
      </Card>
    </Form>
  );
}
