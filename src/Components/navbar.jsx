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
    {name: 'About Us', Link: '/about', classLink: router.pathname === '/surat-keluar' ? 'nav-link active' : 'nav-link'},
  ];

  return (
    <>
<<<<<<< HEAD
      <Navbar collapseOnSelect expand="md" className="navbar-container sticky-top">
        <Container fluid>
          <Navbar.Brand href="#home" className='navbar-brand'>
=======
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="mb-3 p-0 sticky-top" style={{boxShadow: '1px 3px 5px 0px rgba(217,217,217,0.5'}}>
        <Container fluid style={{fontWeight: 'bold'}}>
          <Navbar.Brand href="#home" style={Object.assign({marginLeft: '5%', color: '#1C6758', fontSize: '1rem'})}>
>>>>>>> 98772302e9e73eb7b1157c4641774fd8e6758195
            <img
              src='../assets/img/logo/iconjalanSehat.png'
              height='50'
              alt='Logo'
              loading='lazy'
            /><h4>Jalan Sehat</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <ul className="navbar-nav">
                {navigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link className={`${item.classLink} link-item`} href={item.Link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
