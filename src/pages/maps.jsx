import Position from '@/Components/Position';
import Head from 'next/head';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Maps() {
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(false);
  const [damageType, setDamageType] = useState(null);
  const [locationLat, setLocationLat] = useState(null);
  const [locationLng, setLocationLng] = useState(null);
  const [name, setName] = useState(null);
  const [report, setReport] = useState(null);

  const handlePositionChange1 = (newPosition1) => {
    setPosition(newPosition1);
  };

  let Latitude = '';
  let Longitude = '';

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
    console.log(e.target.damageType.value);
    console.log(e.target.locationLat.value);
    console.log(e.target.locationLng.value);
    console.log(e.target.name.value);
    console.log(e.target.report.value);
    window.location.reload(true);
  };

  const handleChange = (e) => {

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
            <Modal.Title>Laporkan Jalan Rusak</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSendReport} method='POST'>
              <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                <Form.Label>Jenis Kerusakan</Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleChange} id='damageType' name='damageType' required>
                  <option>Pilih Jenis Kerusakan</option>
                  <option value="Kerusakan Tinggi">Kerusakan Tinggi</option>
                  <option value="Kerusakan Sedang">Kerusakan Sedang</option>
                  <option value="Sedang Perbaikan">Sedang Perbaikan</option>
                  <option value="Kondisi Jalan Bagus">Kondisi Jalan Bagus</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                id="exampleForm.ControlTextarea1"
              >
                <Form.Label>Titik Lokasi Latitude
                </Form.Label>
                <Form.Control type="text" disabled value={Latitude} onChange={handleChange} required id='locationLat' name='locationLat' />
              </Form.Group>
              <Form.Group
                className="mb-3"
                id="exampleForm.ControlTextarea1"
              >
                <Form.Label>Titik Lokasi Longitude
                </Form.Label>
                <Form.Control type="text" disabled value={Longitude} onChange={handleChange} required id='locationLng' name='locationLng' />
              </Form.Group>
              <Form.Group
                className="mb-3"
                id="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nama Pelapor
                </Form.Label>
                <Form.Control type="text" onChange={handleChange} placeholder="Nama Pelapor" required name='name' id='name'/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                id="exampleForm.ControlTextarea1"
              >
                <Form.Label>Isi Laporan</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleChange} placeholder="Silahkan isikan Laporan dengan benar dan valid" required name='report' id='report' />
              </Form.Group>
              <Button type='submit' variant="primary">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
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
