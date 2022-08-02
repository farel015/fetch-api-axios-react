import React from "react";
import { Container, Row, Col, Card, TextArea } from "react-bootstrap";
import "../index.css";

const HomePage = () => {
  return (
    <div>
      <Container>
        <h5 className="mt-5">Apa itu Fetch API?</h5>
        <Row className="mt-3">
          <Col sm={6}>
            <Card>
              <Card.Body>
                <span>
                  <b>Fetch API</b> merupakan fungsi dasar untuk meminta sumber daya melalui jaringan, Secara dasar berhubungan dengan request & response (permintaan/tanggapan) yang dapat digunakan hampir di semua jenis browser
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h5 className="mt-3">Persiapan</h5>
        <Row className="mt-3">
          <Col sm={6}>
            <Card>
              <Card.Body>
                <li>
                  Install <b>React</b> "npx create-react-app ."
                </li>
                <li>
                  Install <b>Axios</b> "npm i axios"
                </li>
                <li>
                  Install <b>React-Bootstrap</b> "npm i react-bootstrap bootstrap"
                </li>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h5 className="mt-3">Target API</h5>
        <Row className="mt-3">
          <Col sm={6}>
            <Card>
              <Card.Body>
                <p>Target API yang digunakan :</p>
                <p>
                  <b>https://jsonplaceholder.typicode.com/users/</b>
                </p>
                <span>
                  Methode : <b>GET</b>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
