/* eslint-disable camelcase */
import {supabase} from '../../lib/supabaseClient';
import Position from '@/Components/Position';
import Head from 'next/head';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


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

      <div className='header-map'>
        <h3>LAPORAN JALAN RUSAK</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime architecto exercitationem porro impedit illo qui, laudantium quo quibusdam provident modi reiciendis ea ab consequatur quae numquam quas expedita sint.</p>
        <p>Posisi Anda Saat ini Latitude : {Latitude} dan Longitude : {Longitude} </p>
      </div>

      <div className='map-container'>
        <Position onPositionChange1={handlePositionChange1} onReport={report} />
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
              <Form.Group
                className="mb-3"
                id="exampleForm.ControlTextarea1"
              >
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
                <Form.Label>Isi Laporan</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleChange} placeholder="Silahkan isikan Laporan dengan benar dan valid" required name='message' id='message' />
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
