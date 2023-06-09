/* import Card from 'react-bootstrap/Card';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Footer() {
  const router = useRouter();

  const footer = [
    {name: 'Home', Link: '/', classLink: router.pathname === '/' ? 'nav-link active' : 'nav-link'},
    {name: 'Maps', Link: '/maps', classLink: router.pathname === '/surat-masuk' ? 'nav-link active' : 'nav-link'},
    {name: 'About Us', Link: '/about', classLink: router.pathname === '/surat-keluar' ? 'nav-link active' : 'nav-link'},
  ];
  return (
    <>
      <div className="m-auto">
        <ul>
          {footer.map((item) => (
            <li key={item.name} className="nav-item">
              <Link className={`${item.classLink}`} href={item.Link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
      </div>
    </>

  );
}
 */

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
      <Navbar collapseOnSelect>
        <Container fluid style={Object.assign({fontWeight: 'normal', fontSize: '12px'})}>
          <Nav className="m-auto">
            <ul className="navbar-nav">
              {footerNavigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link className={`${item.classLink} mb-0 pb-0`} href={item.Link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </Nav>
        </Container>
      </Navbar>
      <p style={Object.assign({fontWeight: 'normal', fontSize: '12px'})} className="text-center text-muted">&copy; 2023 Jalan Sehat</p>
    </>
  );
}
