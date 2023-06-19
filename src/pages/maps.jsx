/* eslint-disable react/jsx-no-duplicate-props */
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
import Swal from 'sweetalert2';
import Carousel from 'react-bootstrap/Carousel';

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
          .select('id,nama,jenisKerusakan,latitude,longitude,message,status,foto,created_at')
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
  const handleShow = () => {
    setShow(true);
  };
  // end modal

  // submit form report
  const handleSendReport = async (e) => {
    e.preventDefault();

    // cek kondisi jika titik koordinat tidak ada
    if (!Latitude || !Longitude) {
      Swal.fire({
        title: 'warning!',
        text: 'Titik Lokasi Jalan Tidak Ada!',
        icon: 'info',
        confirmButtonText: 'Tandai Jalan Sekarang',
      });
      return addEventListener('click', (e) => {
        window.location.reload(true);
      });
    }

    const imageReport = e.target.elements.image.files[0];

    try {
      const compressedResult = await new Promise((resolve) => {
        new Compressor(imageReport, {
          quality: 0.8,
          width: 500,
          height: 500,
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

      } else {

        // Lakukan tindakan lanjutan setelah upload berhasil
      }
    } catch (error) {

    }

    if (!imageReport) {
      Swal.fire({
        title: 'error!',
        text: 'image not found!',
        icon: 'question',
        confirmButtonText: 'okay!',
      });
      return;
    }
    const now = new Date();
    const dateNow =

        `${now.getFullYear().toString().padStart(4, '0')}-${(now.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now
            .getHours()
            .toString()
            .padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')} `
    ;

    const {data: insertData, error: insertError} = await supabase
        .from('reports')
        .insert([
          {
            nama: e.target.elements.name.value,
            email: e.target.elements.email.value,
            jenisKerusakan: e.target.elements.damageType.value,
            latitude: e.target.elements.locationLat.value,
            longitude: e.target.elements.locationLng.value,
            message: e.target.elements.message.value,
            status: 'diterima',
            foto: e.target.elements.image.files[0].name,
            created_at: dateNow,
          },
        ]);

    if (insertError) {
      Swal.fire({
        title: 'error!',
        text: 'Failed to save report !',
        icon: 'error',
        confirmButtonText: 'okay!',
      });
    } else {
      Swal.fire({
        title: 'success!',
        text: 'Report Saved Successfully !',
        icon: 'success',
        confirmButtonText: 'Its cool!',
      });
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="row-container-maps-modal">
              <Col
                xs={12}
                sm={12}
                md={12}
                xxl={6}
                className="col-maps-left-modal"
              >
                <img
                  src="./assets/img/modal-img.svg"
                  className="img-fluid"
                  alt="Image"
                />
                <h4>Laporkan Jalan Rusak</h4>
                <p>
                  <b>Yuk!</b> Bantu Kita untuk membuat laporan tentang kondisi
                  jalan diwilayah anda saat ini. Karena dengan Laporan ini kita
                  dapat mengetahui kondisi jalan sebelum kita berkendara agar
                  perjalanan menjadi aman dan nyaman.
                </p>
              </Col>

              <Col xs={12} sm={12} md={12} xxl={6} className="col-maps-right">
                <Form onSubmit={handleSendReport} method="POST">
                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="label-modal">
                      Nama Pelapor
                    </Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="text"
                      onChange={handleChange}
                      placeholder="Alex Steven"
                      required
                      name="name"
                      id="name"
                      size="sm"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="label-modal">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="email"
                      placeholder="alexsteven@example.com"
                      size="sm"
                      name="email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                    <Form.Label className="label-modal">
                      Jenis Kerusakan
                    </Form.Label>
                    <Form.Select
                      className="input-desain"
                      aria-label="Default select example"
                      onChange={handleChange}
                      id="damageType"
                      name="damageType"
                      required
                      size="sm"
                    >
                      <option>Pilih Jenis Kerusakan</option>
                      <option value="Kerusakan Tinggi">Kerusakan Tinggi</option>
                      <option value="Kerusakan Menengah">Kerusakan Menengah</option>
                      <option value="Sedang Perbaikan">Sedang Perbaikan</option>
                      <option value="Kondisi Jalan Baik">
                        Kondisi Jalan Baik
                      </option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label className="label-modal">
                      Masukkan Gambar Jalan
                    </Form.Label>
                    <Form.Control
                      className="input-desain"
                      type="file"
                      size="sm"
                      name="image"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >

                    <Form.Control
                      className="input-desain titik-lokasi"
                      type="hidden"
                      value={Latitude}
                      onChange={handleChange}
                      required
                      id="locationLat"
                      name="locationLat"
                      size="sm"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >

                    <Form.Control
                      className="input-desain titik-lokasi"
                      type="hidden"
                      value={Longitude}
                      onChange={handleChange}
                      required
                      id="locationLng"
                      name="locationLng"
                      size="sm"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    id="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="label-modal">Isi Laporan</Form.Label>
                    <Form.Control
                      className="input-desain"
                      as="textarea"
                      rows={3}
                      onChange={handleChange}
                      placeholder="Silahkan isikan Laporan dengan benar dan valid"
                      required
                      name="message"
                      id="message"
                      size="sm"
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-modal" variant="success">
                    Laporkan Jalan
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {/* akhir modal */}
      <center>
        <h1 className="header-video">Cara Melaporkan Jalan</h1>
        <p className="p-video-desc">
          Berikut ini adalah video tutorial cara melakukan pelaporan dengan
          menggunakan web apps Jalan Sehat.
        </p>
        <div className="ctnr-crsl-yt">
          <iframe
            className="frame-yt"
            src="https://www.youtube.com/embed/svMlooyS5Dc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen

          ></iframe>
        </div>
      </center>
    </>
  );
}

export async function getServerSideProps() {
  const {data: reports, error} = await supabase
      .from('reports')
      .select('id,nama,jenisKerusakan,latitude,longitude,message,status,foto,created_at')
      .eq('status', 'diterima');



  return {
    props: {
      reports: reports,
    }, // will be passed to the page component as props
  };
}
