import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import safetyEscortPic from '../images/safetyEscorts.png'
import safetEscortCallPic1 from '../images/safetyEscortPic1.png'
import safetEscortCallPic2 from '../images/safetyEscortPic2.png'


const SafetyEscorts = () =>{

  return(
    <div>
      <Container>

      <div style={{paddingBottom: "40px", }}>
              <Row>

                  <Col>
                    <h3 style={{textAlign: "center"}}>Safety Escorts </h3>
                    <p>
                      As a safe alternative to walking alone at night, the CSO Safety Escort program is a 24-hour
                      complimentary service for members of the UCI community.
                    </p>

                  </Col>
                  <Col>
                  <img src={safetyEscortPic} style={{height: "300px", width: "500px"}}/>
                  </Col>


              </Row>
        </div>

        <div style={{paddingTop: "40px", paddingBottom: "60px", backgroundColor: "#F0E6FA"}}>
              <Row>

                <Col style={{textAlign: "center"}}> <h6>Safety Escorts are provided to the following locations.</h6></Col>

              </Row>
              <Row>
                <Col>
                <h6 style={{textAlign: "center"}}>1.</h6>
                </Col>
                <Col>
                <h6 style={{textAlign: "center"}}>2.</h6>
                </Col>

                <Col>
                <h6 style={{textAlign: "center"}}>3.</h6>
                </Col>
                <Col>
                <h6 style={{textAlign: "center"}}>4.</h6>
                </Col>
              </Row>
              <Row>
                <Col><p>Main Campus</p></Col>
                <Col><p>University Research Park </p></Col>
                <Col><p>All campus housing areas</p></Col>
                <Col><p>University Town Center Apartments</p></Col>
              </Row>


        </div>
        <div>

        </div>


      </Container>
    <div style={{paddingTop: "40px", paddingBottom: "60px"}}>
      <Row>
        <Col><h4 style={{textAlign: "center"}}>How can I request an escort?</h4></Col>
      </Row>
      <Row>
        <Col>
          <img style={{height: "255px", width: "255px", display: "block", marginLeft: "auto" }}src={safetEscortCallPic1}/>
        </Col>
        <Col>
          <p style={{textAlign: "left"}}>1. Call (949)824-SAFE(7833)</p>
          </Col>
      </Row>
      <Row >
        <Col style={{paddingTop: "40px", paddingBottom: "60px"}}>
            <p style={{textAlign: "right"}}>2. Provide info to the dispatcher </p>
            <p style={{textAlign: "right", fontSize: "10px"}}>When requesting a safety escort, you'll need to provide the<br></br> following information </p>
            <p style={{textAlign: "right",fontSize: "10px"}}>1. Your name </p>
            <p style={{textAlign: "right",fontSize: "10px"}}>2. Your location </p>
            <p style={{textAlign: "right",fontSize: "10px"}}>3. Your cellphone number </p>
            <p style={{textAlign: "right",fontSize: "10px"}}>4. Your destination </p>
        </Col>
        <Col>
        <img style={{height: "255px", width: "255px", display: "block", marginRight: "auto" }}src={safetEscortCallPic2}/>
        </Col>
      </Row>

      <Row >
      <Col>
        <img style={{height: "255px", width: "255px", display: "block", marginLeft: "auto" }}src={safetEscortCallPic2}/>
        </Col>
        <Col style={{paddingTop: "40px", paddingBottom: "60px"}}>
            <p style={{textAlign: "left"}}>3. A uniformed CSO is on their way!  </p>
            <p style={{textAlign: "left", fontSize: "10px"}}>A uniformed CSO will then escort you to your destination,<br></br> informing police dispatch that you've safetly reached your destination</p>

        </Col>

      </Row>
      <Row style={{paddingTop: "40px", paddingBottom: "60px"}}>
          <Col style={{paddingRight: "20px"}}>
              <h5 style={{textAlign: "center",textAlign: "right",paddingRight: "20px"}}>CSO Escort Services</h5>
              <p style={{fontSize: "12px",textAlign: "right",paddingRight: "20px"}}>Winter</p>
              <p style={{fontSize: "12px",textAlign: "right",paddingRight: "20px"}}>Sun-Sat: 6:00pm - 1:00am</p>

              <p style={{fontSize: "12px",textAlign: "right",paddingRight: "20px"}}>Spring/Summer</p>
              <p style={{fontSize: "12px", textAlign: "right",paddingRight: "20px"}}>Sun-Sat: 7:00pm - 1:00am</p>

              <p style={{fontSize: "12px",textAlign: "right",paddingRight: "20px"}}>www.police,uci.edu</p>
              <p style={{fontSize: "12px",textAlign: "right",paddingRight: "20px"}}>(949) 824-SAFE(7233)</p>

              </Col>
              <Col style={{textAlign: "left"}}>
                <p style={{textAlign: "left"}}>This program isn't intended to replace existing transportation services such as the campus shuttles
                  , ride sharing apps, or discourage individuals from walking in groupds.
                </p>
                <p style={{textAlign: "left"}}>Due to COVID-19 situation, safety escorts will be conducted on foot. Vehicle rides will be suspended
                  to ensure your safety
                </p>
              </Col>
          </Row>
      </div>
    </div>
  )
}

export default SafetyEscorts;
