import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';

function Footer() {
return <>
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

<Container>
  <Row>
  <Col>
  <img class="logo" src={logo} />
  </Col>
  <Col>
  <div className={''}>
    <h3>Resources</h3>
    <ul>
        <li>Womxn's Center for Success</li>
        <li>Fresh Hub</li>
        <li>Safety Escorts</li>
        <li>CARE</li>
        <li>Emergency Poles</li>
        <li>Counseling Center</li>
        <li>Hotlines</li>
    </ul>
  </div>
  </Col>
  <Col>
    <div>
        <h3>About</h3>
        <ul>
            <li>Our Mission</li>
            <li>Our Values</li>
            <li>Meet the Team</li>
        </ul>
    </div>
  </Col>
  <Col>
    <div>
        <h3>Contact</h3>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Get in Touch</li>
        </ul>
    </div>
  </Col>
  </Row>
</Container>
</>
}
export default Footer
