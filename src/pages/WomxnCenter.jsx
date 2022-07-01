import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import womxncenterpic from '../images/womxnCenterSuccess.png'
import identitypic from '../images/identity.jpg'
import awarnesspic from '../images/awarness.jpg'
import lovepic from '../images/love.jpg'
import wellnesspic from '../images/wellness.png'
import personalGrowth from '../images/PersonalGrowth.png'
import Card from 'react-bootstrap/Card'
import ResourceCard from '../components/ResourceCard';
import womxnGuidePic from '../images/womxnGuidePic.png'
import offCampusPic from '../images/offCampusResources.png'
import wellnessRoomsPic from '../images/wellnessRooms.png'
import directorPic from '../images/director.png'
import assistantDirectorPic from '../images/assistantDirector.png'
import empowerHerPic from '../images/empowerHer.png'
import relationshipPic from '../images/relationships.png'
import negotiationPayPic from '../images/artOfNegotiation.png'
import mapPic from '../images/temp_map.png'

const WomxnCenter = () =>{
  let womxnTxt = "This guide is a curated list of information resources, links, and offices that the Womxn's Center for Success find helpful to know about before getting campus."
  let offCampusTxt = "Planned Parenthood American Association of University Women, and Catalyst - Workplaces the Work for Women are a few of the many resources to take advantage of."
  let wellnessRoomsTxt = "These rooms help those lactation to comfortably provide milk after returning to work or school and offer spaces for breastfeeding mothers to help achieve success at work, school, and personal lives. "
  let empowerHerEventTxt = "This event provides faculty and students an opportunity to build community connections, learn holistic wellness skills, and explore various professional development topics."
  let relationshipTxt = "Come have conversations on different relationship topics, like romantic, platonic, and self, every week with our Counselor in Residence, Dr. Shruti and Lydia!"
  let negotiationPayTxt = "Learn how and why negotiating salary is one tool to tackle the gender pay gap. This event is open to all regardless of identity. "
  return (
    <div>
      <div>
        <Container>
            <div style={{paddingBottom: "40px", }}>
              <Row>

                  <Col>
                    <h3 style={{textAlign: "center"}}>Womxn's Center for Success</h3>
                    <p>
                      The Womxn's Center for Success at UC Irvine advances gender equality by rasing consciousness on social justice concepts,
                      fostering personal growth, building community connections, encouraging identity development and increasing access to
                      resources that supoort holistic wellness.
                    </p>

                  </Col>
                  <Col>
                  <img src={womxncenterpic} style={{height: "300px", width: "500px"}}/>
                  </Col>


              </Row>
            </div>


            <div style={{paddingTop: "40px", paddingBottom: "60px", backgroundColor: "#F0E6FA"}}>
              <Row>
                <Col></Col>
                <Col> <h6>What is the Womxn's Center for Success?</h6></Col>
                <Col></Col>
              </Row>
              <Row >

                <Col>
                  <img src={identitypic} style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}/>
                </Col>
                <Col>
                  <img src={awarnesspic} style={{ display: "block", marginLeft: "auto", marginRight: "auto", backgroundColor: "#F0E6FA"}}/>
                </Col>
                <Col>
                  <img src={lovepic} style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}/>
                </Col>

              </Row>
              <Row>
                <Col><h6 style={{textAlign: "center"}}>Identity</h6></Col>
                <Col><h6 style={{textAlign: "center"}}>Awareness</h6></Col>
                <Col> <h6 style={{textAlign: "center"}}>Community</h6></Col>
              </Row>
              <Row>
                <Col><p style={{fontSize: ".8em"}}>Discover identity as it intersects with gender, as evidenced by acknowledgement of how identity shapes perception and experience in the world.</p></Col>
                <Col><p style={{fontSize: ".8em"}}>Identify systems of power, priviledge, and opression related to gender, as evidence by the ability to fully articulate this dynamic</p></Col>
                <Col> <p style={{fontSize: ".8em"}}>Create meaningful community connections, as evidenced by engaging in deep and critical converstations and reflections</p></Col>
              </Row>
              <Row>
                  <Col>
                  </Col>
              </Row>
              <Row>
                <Col><img src={wellnesspic} style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}/></Col>
                <Col><img src={personalGrowth} style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}/></Col>
            </Row>
            <Row>
                <Col><h6 style={{textAlign: "center"}}>Wellness</h6></Col>
                <Col><h6 style={{textAlign: "center"}}>Personal Growth</h6></Col>
            </Row>
            <Row>
                <Col><p style={{fontSize: ".8em"}}>Improve holistic practices that cente physical, emotional, spirtual, and social wellness, as evidenced by increased satifaction with overall persoanl wellness.</p></Col>
                <Col><p style={{fontSize: ".8em"}}>Integrate skills and practices that empower personal growth, as evidenced by increased confidence and healthy self-esteem</p></Col>
            </Row>
            </div>
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
              <Row>
                 <Col></Col>
                  <Col> <h5 style={{textAlign: "center"}}>Resources</h5></Col>
                  <Col></Col>
              </Row>
              <Row>
                <Col>
                  <ResourceCard title="Womxn's Guide to UCI" txt={womxnTxt} img={womxnGuidePic} ></ResourceCard>
                </Col>
                <Col>
                  <ResourceCard title="Off Campus Resources" txt={offCampusTxt} img={offCampusPic}></ResourceCard>
                </Col>
                <Col>
                  <ResourceCard title="Lactation & Wellness Rooms" txt={wellnessRoomsTxt} img={wellnessRoomsPic}></ResourceCard>
                </Col>

              </Row>
            </div>
            <div style={{paddingTop: "70px", backgroundColor: "#F0E6FA"}}>
              <Row>
                <Col>
                <h4 style={{textAlign: "center"}}>Schedule an Appointment</h4>
                </Col>

              </Row>
              <Row>
                <Col>
                <h6 style={{textAlign: "center", color: "grey", fontSize: ".8em"}}>Got any questions, comments, concerns, or simply want to learn more? Book a time
                with our Director or Assistant Director!</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={directorPic} style={{ display: "block", marginLeft: "auto", marginRight: "auto",height: "201px", width: "201px"}}/>
                </Col>
                <Col>
                  <img src={assistantDirectorPic} style={{ display: "block", marginLeft: "auto", marginRight: "auto",height: "201px", width: "201px"}}/>

                </Col>
              </Row>
              <Row>
                <Col> <h6 style={{textAlign: "center", color: "grey", fontSize: ".8em"}}>Director, Sydney Abril Torres</h6></Col>
                <Col> <h6 style={{textAlign: "center", color: "grey", fontSize: ".8em"}}>Assistant Director, Erika Cortez</h6></Col>

              </Row>

            </div>

            <div style={{paddingTop: "40px"}}>
              <Row>
                <Col>
                  <h4 style={{textAlign: "center"}}>Upcoming Events & Workshops</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card   style={{ height: '18rem', width:'15rem' , cursor: "pointer" }}border="light" as='a'>
                      <Card.Img style={{ height: '13rem' }} varient="top" src={empowerHerPic}/>
                        <Card.Body  >

                          <Card.Title style={{ fontSize: "12px" }}>
                            EmpowerHer Summit 2022
                          </Card.Title>
                          <Card.Text style={{ fontSize: "11px" }} >
                            <p style={{textAlign: "left"}}>Fri, Mar 4, 9:00am</p>
                            <p>{empowerHerEventTxt}</p></Card.Text>

                        </Card.Body>
                  </Card>
                </Col>
                <Col>
                    <Card   style={{ height: '18rem', width:'15rem' , cursor: "pointer" }}border="light" as='a'>
                          <Card.Img style={{ height: '13rem' }} varient="top" src={relationshipPic}/>
                            <Card.Body  >

                              <Card.Title style={{ fontSize: "12px" }}>
                                Let's Talk Relationships
                              </Card.Title>
                              <Card.Text style={{ fontSize: "11px" }} >
                                <p style={{textAlign: "left"}}>Mon, Mar 7, 1:00pm</p>
                                <p>{relationshipTxt}</p></Card.Text>

                            </Card.Body>
                      </Card>
                </Col>
                <Col>
                    <Card   style={{ height: '18rem', width:'15rem' , cursor: "pointer" }}border="light" as='a'>
                                  <Card.Img style={{ height: '13rem' }} varient="top" src={negotiationPayPic}/>
                                    <Card.Body  >

                                      <Card.Title style={{ fontSize: "12px" }}>
                                        Asian Womxn's Equal Pay Day - The Art of Negotiation Workshop
                                      </Card.Title>
                                      <Card.Text style={{ fontSize: "11px" }} >
                                        <p style={{textAlign: "left"}}>Wed, Mar 9, 3:00pm</p>
                                        <p>{negotiationPayTxt}</p></Card.Text>

                                    </Card.Body>
                      </Card>
                </Col>
              </Row>
              <Row>
                {/* <Col>
                <button>View more events</button>
                </Col> */}


              </Row>
            </div>
            <div style={{paddingBottom: "40px", padding: "80px"}}>
              <Row>
                <Col>
                <h5 style={{textAlign: "center"}}>Womxn's Center for Success</h5>
                <p style={{fontSize: "12px"}}>Mon-Fri: 9:00am - 5:00pm</p>
                <p style={{fontSize: "12px"}}>G458 Student Center South</p>
                <p style={{fontSize: "12px"}}>4th Floor</p>
                <p style={{fontSize: "12px"}}>RISE Suite</p>
                <p style={{fontSize: "12px"}}>Irvine, CA 92697</p>
                <p style={{fontSize: "12px"}}>www.womxnshub.uci.edu</p>
                <p style={{fontSize: "12px"}}>(949) 824-6000</p>
                <p style={{fontSize: "12px"}}>womxnscenter@uci.edu</p>
                </Col>
                <Col>
                  <img src={mapPic} style={{height: "300px", width: "600px"}}></img>
                </Col>
              </Row>
            </div>


        </Container>

      </div>
    </div>

  )
}

export default WomxnCenter;
