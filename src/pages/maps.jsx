/* eslint-disable camelcase */
import {supabase} from '../../lib/supabaseClient';
import Position from '@/Components/Position';
import Head from 'next/head';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Maps({reports}) {
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(false);
  const [report, setReport] = useState(reports);


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
  const handleSendReport = async (e) => {
    e.preventDefault();

    const {data, error} = await supabase
        .from('reports')
        .insert([
          {
            nama: e.target.name.value,
            jenisKerusakan: e.target.damageType.value,
            latitude: e.target.locationLat.value,
            longitude: e.target.locationLng.value,
            message: e.target.message.value,
            status: 'diterima',

          },
        ]);

    if (error) {
      console.log(error);
    } else {
      alert('Laporan berhasil disimpan !');
    }



    window.location.reload(true);
  };

  const handleChange = (e) => {

  };


  return (
    <>
      <Head>
        <title>JalanSehat | Maps</title>
      </Head>

      <Container>
        <Row className="row-container-maps">
          <Col xs={12} sm={12} md={12} xxl={8} className="col-maps-left">
            <div>
              <Position onPositionChange1={handlePositionChange1} onReport={report} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} xxl={4} className="col-maps-right">
            <center>
              <img
                className="img-maps-logo"
                src="./assets/img/logo-maps.png"
                alt=""
              />
            </center>
            <h3>LAPORAN JALAN RUSAK</h3>
            <p>
              <b>Jalan Sehat</b> adalah sistem informasi geografis yang
              menyajikan data spasial mengenai kondisi jalan yang
              diklasifikasikan berdasarkan tingkat kerusakannya.
            </p>
            <p>Keterangan :</p>

            <p className="mark-color" style={Object.assign({color: '#CD1818'})}><i className='bi bi-pin-map-fill'></i> Kerusakan Tinggi</p>
            <p className="mark-color" style={Object.assign({color: '#F49D1A'})}><i className='bi bi-pin-map-fill'></i> Kerusakan Menengah</p>
            <p className="mark-color" style={Object.assign({color: '#3E6D9C'})}><i className='bi bi-pin-map-fill'></i> Sedang Perbaikan</p>
            <p className="mark-color" style={Object.assign({color: '#5D9C59'})}><i className='bi bi-pin-map-fill'></i> Kondisi Jalan Baik</p>


            <Button className="btn-laporan" onClick={handleShow}>Laporkan Jalan<i className='icon-btn bi-envelope-exclamation-fill'></i></Button>
          </Col>
        </Row>
      </Container>


      {/* modal */}
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Laporkan Jalan Rusak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="row-container-maps">
              <Col xs={12} sm={12} md={12} xxl={6} className="col-maps-left">

              </Col>

              <Col xs={12} sm={12} md={12} xxl={6} className="col-maps-right">
                <Form onSubmit={handleSendReport} method='POST'>
                  <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                    <Form.Label>Nama Pelapor
                    </Form.Label>
                    <Form.Control type="text" onChange={handleChange} placeholder="Nama Pelapor" required name='name' id='name' />
                  </Form.Group>

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

                  <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control type="file" size="sm" />
                  </Form.Group>

                  <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                    <Form.Label>Titik Lokasi Latitude
                    </Form.Label>
                    <Form.Control type="text" disabled value={Latitude} onChange={handleChange} required id='locationLat' name='locationLat' />
                  </Form.Group>

                  <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                    <Form.Label>Titik Lokasi Longitude
                    </Form.Label>
                    <Form.Control type="text" disabled value={Longitude} onChange={handleChange} required id='locationLng' name='locationLng' />
                  </Form.Group>

                  <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                    <Form.Label>Isi Laporan</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleChange} placeholder="Silahkan isikan Laporan dengan benar dan valid" required name='message' id='message' />
                  </Form.Group>
                  <Button type='submit' variant="primary">Save Changes</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* akhir modal */}


    </>
  );
}

export async function getServerSideProps() {
  const {data: reports, error} = await supabase
      .from('reports')
      .select('id,jenisKerusakan,latitude,longitude,message,status')
      .eq('status', 'diterima');



  return {
    props: {
      reports: reports,
    }, // will be passed to the page component as props
  };
}
