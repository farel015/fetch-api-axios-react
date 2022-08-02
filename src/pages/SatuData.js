import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const SatuData = () => {
  // Membuat state identifier untuk identifikasi bedasarkan ID //
  const [identifier, setIdentifier] = useState(1);
  // Membuat state user  //
  const [user, setUser] = useState([]);
  // Membuat state loading jika data belum tampil dari API //
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      // memanggil API //
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
      // respon data dari api dengan menggunakan state setUser//
      setUser(response.data);
      // menampilkan loading jika data belum tampil //
      setLoading(false);
    } catch (e) {
      // menampilkan loading jika data belum tampil (error) //
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]); //memasukkan identifier//

  return (
    <div>
      <Container>
        <h4 className="mt-5">Fetching satu Data</h4>
        <hr></hr>
        <Row className="mt-3">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Masukkan id data" value={identifier} onChange={(e) => setIdentifier(e.target.value)} className="me-2" aria-label="Search" />
          </Form>

          <Col sm={12} className="mt-3">
            {loading ? (
              <div>Loading ...</div>
            ) : (
              <Table responsive="sm" bordered hover className="bg-white">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.phone}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SatuData;
