import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const SeluruhData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      // memanggil API start //
      let response = await axios.get("https://jsonplaceholder.typicode.com/users");
      // memanggil API end //
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Container>
        <h4 className="mt-5">Fetching seluruh data</h4>
        <hr></hr>
        <Row className="mt-3">
          <Col sm={12}>
            <Table bordered hover className="bg-white">
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
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SeluruhData;
