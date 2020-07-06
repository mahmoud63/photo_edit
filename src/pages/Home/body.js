import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'reactjs-navbar/dist/index.css';

function Body() {
  return (
    <>
      <Row>
        <Col lg={1} md={1} sm={1} xs={1}></Col>
        <Col lg={5} md={5} sm={5} xs={5} className="homeCol">
          <div className="homeCard card">
            <img src="/static/images/card1.png" className="cardImg"></img>
            <a className="cardLink btn btn-outline-light" href="/gallery">
              View Demo
            </a>
          </div>
        </Col>
        <Col lg={5} md={5} sm={5} xs={5} className="homeCol">
          <div className="homeCard card">
            <img src="/static/images/card2.png" className="cardImg"></img>
            <a className="cardLink btn btn-outline-light">Select Image</a>
          </div>
        </Col>
        <Col lg={1} md={1} sm={1} xs={1}></Col>
      </Row>
    </>
  );
}

export default Body;
