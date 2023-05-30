import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function NavbarComponent() {
  const router = useRouter();

  const navigation = [
    {name: 'Home', Link: '/', classLink: router.pathname === '/' ? 'nav-link active' : 'nav-link'},
    {name: 'Maps', Link: '/maps', classLink: router.pathname === '/maps' ? 'nav-link active' : 'nav-link'},
    {name: 'About Us', Link: '/about', classLink: router.pathname === '/about-us' ? 'nav-link active' : 'nav-link'},
    {name: 'Canvas', Link: '/canvas', classLink: router.pathname === '/canvas' ? 'nav-link active' : 'nav-link'},
  ];


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='/assets/img/logo/iconjalanSehat.png'
              height='100'
              alt='Logo'
              loading='lazy'
            /> Jalan Sehat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ul className="navbar-nav">
                {navigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link className={`${item.classLink}`} href={item.Link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Nav>
            <Nav>
              <li className="nav-item">
                <Link className="nav-link" href="/login">Login</Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}
