import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import {useRouter} from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FooterComponent() {
  const router = useRouter();

  const footerNavigation = [
    {name: 'Home', Link: '/', classLink: router.pathname === '/' ? 'nav-link active' : 'nav-link'},
    {name: 'Maps', Link: '/maps', classLink: router.pathname === '/surat-masuk' ? 'nav-link active' : 'nav-link'},
    {name: 'About Us', Link: '/about', classLink: router.pathname === '/surat-keluar' ? 'nav-link active' : 'nav-link'},
  ];

  return (
    <>
      <div style={{backgroundColor: '#4C4C6D'}}>
        <h1 style={Object.assign({fontSize: '18px', paddingTop: '10px', margin: '0px', color: '#FFFFFF'})}>Jalan Sehat</h1>
        <Navbar collapseOnSelect>
          <Container fluid style={Object.assign({fontWeight: 'normal', fontSize: '12px'})}>
            <Nav className="m-auto">
              <ul className="navbar-nav">
                {footerNavigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link className={`${item.classLink} mb-0 pb-0`} style={{color: '#FFFFFF'}} href={item.Link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Nav>
          </Container>
        </Navbar>
        <p style={Object.assign({fontWeight: 'normal', fontSize: '12px'})} className="text-center text-muted m-0">&copy; 2023 Jalan Sehat</p>
      </div>
    </>
  );
}
