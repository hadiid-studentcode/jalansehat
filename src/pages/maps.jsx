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
import 'bootstrap-icons/font/bootstrap-icons.css';
import Compressor from 'compressorjs';

export default function Maps({reports}) {
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(false);
  const [report, setReport] = useState(reports);
  const [data, setData] = useState(null);



  const channel = supabase.channel('db-jalanSehat');


  channel.on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'reports',
      },
      (payload) => setData(payload.data),
  );

  channel.subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      const res = await supabase
          .from('reports')
          .select('id,nama,jenisKerusakan,latitude,longitude,message,status,foto')
          .eq('status', 'diterima');
      setData(res.data);
    }
  });



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

    const imageReport = e.target.elements.image.files[0];

    try {
      const compressedResult = await new Promise((resolve) => {
        new Compressor(imageReport, {
          quality: 0.8,
          width: 200,
          height: 200,
          success: (compressed) => {
            resolve(compressed);
          },
        });
      });

      const {data: uploadData, error: uploadError} = await supabase
          .storage
          .from('jalanSehat')
          .upload(`public/${imageReport.name}`, compressedResult);

      if (uploadError) {
        console.error(uploadError);
      } else {
        console.log(uploadData);
        // Lakukan tindakan lanjutan setelah upload berhasil
      }
    } catch (error) {
      console.error(error);
    }

    const {data: insertData, error: insertError} = await supabase
        .from('reports')
        .insert([
          {
            nama: e.target.elements.name.value,
            jenisKerusakan: e.target.elements.damageType.value,
            latitude: e.target.elements.locationLat.value,
            longitude: e.target.elements.locationLng.value,
            message: e.target.elements.message.value,
            status: 'diterima',
            foto: e.target.elements.image.files[0].name,
          },
        ]);

    if (insertError) {
      console.log(insertError);
    } else {
      alert('Laporan berhasil disimpan!');
    }

    setShow(false);

    // window.location.reload(true);
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
              <Position
                onPositionChange1={handlePositionChange1}
                onReport={report}
                onData={data}
              />
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

            <p
              className="mark-color"
              style={Object.assign({color: '#CD1818'})}
            >
              <i className="bi bi-geo-alt-fill"></i> Kerusakan Tinggi
            </p>
            <p
              className="mark-color"
              style={Object.assign({color: '#F49D1A'})}
            >
              <i className="bi bi-geo-alt-fill"></i> Kerusakan Menengah
            </p>
            <p
              className="mark-color"
              style={Object.assign({color: '#3E6D9C'})}
            >
              <i className="bi bi-geo-alt-fill"></i> Sedang Perbaikan
            </p>
            <p
              className="mark-color"
              style={Object.assign({color: '#5D9C59'})}
            >
              <i className="bi bi-geo-alt-fill"></i> Kondisi Jalan Baik
            </p>

            <Button className="btn-laporan" onClick={handleShow}>
              Laporkan Jalan
              <i className="icon-btn bi-envelope-exclamation-fill"></i>
            </Button>
          </Col>
        </Row>
      </Container>

      {/* modal */}
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Laporkan Jalan Rusak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img src="./assets/img/abstract-white-background.jpg"></img> */}
          <Container>
            <Row className="row-container-maps">
              <Col xs={12} sm={12} md={12} xxl={6} className=""></Col>
              <Col xs={12} sm={12} md={12} xxl={6} className="col-maps-right">
                <Form onSubmit={handleSendReport} method="POST">
                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Nama Pelapor</Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="text"
                      onChange={handleChange}
                      placeholder="Nama Pelapor"
                      required
                      name="name"
                      id="name"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                    <Form.Label>Jenis Kerusakan</Form.Label>
                    <Form.Select
                      className="input-desain"
                      aria-label="Default select example"
                      onChange={handleChange}
                      id="damageType"
                      name="damageType"
                      required
                    >
                      <option>Pilih Jenis Kerusakan</option>
                      <option value="Kerusakan Tinggi">Kerusakan Tinggi</option>
                      <option value="Kerusakan Sedang">Kerusakan Sedang</option>
                      <option value="Sedang Perbaikan">Sedang Perbaikan</option>
                      <option value="Kondisi Jalan Bagus">
                        Kondisi Jalan Bagus
                      </option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Masukkan Gambar Jalan</Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="file"
                      size="sm"
                      name="image"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Titik Lokasi Latitude</Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="text"
                      disabled
                      value={Latitude}
                      onChange={handleChange}
                      required
                      id="locationLat"
                      name="locationLat"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Titik Lokasi Longitude</Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="text"
                      disabled
                      value={Longitude}
                      onChange={handleChange}
                      required
                      id="locationLng"
                      name="locationLng"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Isi Laporan</Form.Label>
                    <Form.Control
                      className="input-desain"
                      as="textarea"
                      rows={3}
                      onChange={handleChange}
                      placeholder="Silahkan isikan Laporan dengan benar dan valid"
                      required
                      name="message"
                      id="message"
                    />
                  </Form.Group>
                  <Button type="submit" variant="success">
                    Save Changes
                  </Button>
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
      .select('id,nama,jenisKerusakan,latitude,longitude,message,status,foto')
      .eq('status', 'diterima');



  return {
    props: {
      reports: reports,
    }, // will be passed to the page component as props
  };
}
