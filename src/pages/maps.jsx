import Position from '@/Components/Position';
import Head from 'next/head';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Maps() {
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(false);

  const handlePositionChange1 = (newPosition1) => {
    setPosition(newPosition1);
  };

  let Latitude = null;
  let Longitude = null;

  if (position) {
    Latitude = position.lat;
    Longitude = position.lng;
  }

  // modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // end modal

  // submit form report
  const handleSendReport = (e) => {
    e.preventDefault();
    console.log(e);
  };


  return (
    <>
      <Head>
        <title>JalanSehat | Maps</title>
      </Head>

      <div className='header-map'>
        <h3>LAPORAN JALAN RUSAK</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime architecto exercitationem porro impedit illo qui, laudantium quo quibusdam provident modi reiciendis ea ab consequatur quae numquam quas expedita sint.</p>
        <p>Posisi Anda Saat ini Latitude : {Latitude} dan Longitude : {Longitude} </p>
      </div>

      <div className='map-container'>
        <Position onPositionChange1={handlePositionChange1} />
      </div>

      <div className="container-footer-map">

        <button className='btn-laporan' onClick={handleShow}>Laporkan Jalan Rusak</button>
        {/* modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSendReport} method='POST'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}

        <div className="list-mark">
          <ul>
            <li className='icon-red'>Kerusakan Tinggi</li>
            <li className='icon-yellow'>Kerusakan Sedang</li>
            <li className='icon-blue'>Sedang Perbaikan</li>
            <li className='icon-green'>Kondisi Jalan Bagus</li>
          </ul>
        </div>

      </div>


    </>
  );
}
