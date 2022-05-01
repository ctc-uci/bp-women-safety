import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';

function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />

      <Container>
        <Row>
          <Col>
            <img className="logo" src={logo} alt="website logo" />
          </Col>
          <Col>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="https://womxnscenter.uci.edu/">Womxn&apos;s Center for Success</a>
                </li>
                <li>
                  <a href="https://basicneeds.uci.edu/">Fresh Hub</a>
                </li>
                <li>
                  <a href="https://www.police.uci.edu/how-do-i/safety-escort.php">Safety Escorts</a>
                </li>
                <li>
                  <a href="https://care.uci.edu/">CARE</a>
                </li>
                <li>
                  <a href="https://www.police.uci.edu/how-do-i/_brochures/bluelight_phones.pdf">
                    Emergency Poles
                  </a>
                </li>
                <li>
                  <a href="https://counseling.uci.edu/">Counseling Center</a>
                </li>
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
  );
}
export default Footer;
