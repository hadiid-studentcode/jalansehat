import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import {useRouter} from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function FooterComponent() {
  const router = useRouter();

  const footerNavigation = [
    {name: 'Home', Link: '/', classLink: router.pathname === '/' ? 'nav-link active' : 'nav-link'},
    {name: 'Maps', Link: '/maps', classLink: router.pathname === '/surat-masuk' ? 'nav-link active' : 'nav-link'},
    {name: 'About Us', Link: '/about', classLink: router.pathname === '/surat-keluar' ? 'nav-link active' : 'nav-link'},
  ];

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 185">
        <path
          fill="#3d8361"
          fillOpacity="1"
          d="M0,128L40,133.3C80,139,160,149,240,144C320,139,400,117,480,96C560,75,640,53,720,64C800,75,880,117,960,133.3C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Jalan Sehat</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-geo-alt-fill"></i> Alamat Jalan Sehat
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-whatsapp"></i> +123 123 123
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-envelope-fill"></i>
                      {' jalansehat@mail.com '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Support</h3>
                <ul>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Information</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About Us</h3>
                <ul>
                  <li>
                    <a href="#">
                      About Jalan Sehat
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Our Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      For Investor & Donator
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <p className="copyright">Jalan Sehat © 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
