import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavbarComponent() {
  const router = useRouter();

  const navigation = [
    {name: 'Beranda', Link: '/', classLink: router.pathname === '/' ? 'nav-link active' : 'nav-link'},
    {name: 'Laporkan', Link: '/maps', classLink: router.pathname === '/maps' ? 'nav-link active' : 'nav-link'},
    {name: 'Tentang Kami', Link: '/about', classLink: router.pathname === '/about' ? 'nav-link active' : 'nav-link'},
  ];

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar-container sticky-top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="navbar-brand">
            <h4>Jalan Sehat</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <ul className="navbar-nav">
                {navigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link
                      href={item.Link}
                      className={`${item.classLink} link-item`}

                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Nav>
          </Navbar.Collapse>
          <Image
            className="flag"
            src="/assets/img/indonesia.png"
            height={30}
            width={30}
            alt="Logo"
            loading="lazy"
          />
        </Container>
      </Navbar>
    </>
  );
}
