import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarComponent() {
  const router = useRouter();

  const navigation = [
    {name: 'Home', Link: '/', classLink: router.pathname === '/' ? 'nav-link active' : 'nav-link'},
    {name: 'Maps', Link: '/maps', classLink: router.pathname === '/surat-masuk' ? 'nav-link active' : 'nav-link'},
    {name: 'About Us', Link: '/about-us', classLink: router.pathname === '/surat-keluar' ? 'nav-link active' : 'nav-link'},
  ];


  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="mb-3 sticky-top" style={{boxShadow: '1px 6px 10px 0px rgba(217,217,217,0.89'}}>
        <Container fluid style={Object.assign({fontWeight: 'bold', fontSize: '1.1rem'})}>
          <Navbar.Brand href="#home" style={{color: '#1C6758'}}>
            <img
              src='../assets/img/logo/iconjalanSehat.png'
              height='50'
              alt='Logo'
              loading='lazy'
            />Jalan Sehat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
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
                <Link className="nav-link" href="/login"><Button style={Object.assign({background: '#3D8361', borderRadius: 18, fontWeight: 'bold', width: 100})}>Login</Button></Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}
