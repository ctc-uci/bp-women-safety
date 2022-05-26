import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from './Card';
import womxnpic from '../images/WomxnCenterPic.jpg'
import freshpic from '../images/FreshHubPic.jpg'
import bluelightpic from '../images/BlueLight.jpg'
import Card from 'react-bootstrap/Card'
import './Feature.css';
function Feature() {

  function linkToWomxnSite(){
    location.href = 'https://womxnscenter.uci.edu/';
  }



  function linkToFreshhub(){
    location.href = "https://basicneeds.uci.edu/";
  }
  let womxnText =
    'The center focues on womxn-specific needs and ideas through workshops, training, and space interaction in ways that promote personal empowerment';
  let freshHub =
    'Fresh offers emergency food and toiletries, connects students to critical on and off-campus resources, and provides educational opportunities for students.';
  let emBlueLight =
    'These phones provide 24-hour direct communication to UCIPD and can be used to report crime, fire, accidents, suspicious behavior or activity, or medical emergencies.';
  return (
    <div id='feature'>
      <h3 id='mainHeader'>Featured Resources</h3>
      <Container>
        <Row>
          <Col>
          </Col>{" "}
          <Col>
          {/* <h3 id='mainHeader'>Featured Resources</h3> */}
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col style={{paddingTop: "100px", paddingRight: "40px", paddingLeft: "40px"}}>
            {' '}
            <Card  onClick={linkToWomxnSite} style={{ height: '18rem', width:'15rem' , cursor: "pointer" }}border="light" as='a'>
            <Card.Img style={{ height: '13rem' }} varient="top" src={womxnpic}/>
              <Card.Body  >

                <Card.Title style={{ fontSize: "12px" }}>
                  Womxn's Center for success
                </Card.Title>
                <Card.Text style={{ fontSize: "11px" }} >{womxnText}</Card.Text>

              </Card.Body>
            </Card>
          {/* <Card title={"Womxn's Center for Success"} text={womxnText} img={womxnpic} link={'https://womxnscenter.uci.edu/'} />{' '} */}
          </Col>
          <Col style={{paddingTop: "100px", paddingRight: "20px", paddingLeft: "40px"}}>
            {' '}
            <Card  onClick={linkToFreshhub} style={{ height: '18rem', width:'15rem' , cursor: "pointer"}} border="light" as='a'>
            <Card.Img  style={{ height: '13rem' }} varient="top" src={freshpic}/>
              <Card.Body>

                <Card.Title style={{ fontSize: "12px" }}>
                 FreshHub
                </Card.Title>
                <Card.Text style={{ fontSize: "11px" }}>{freshHub}</Card.Text>
              </Card.Body>
            </Card>

            {/* <Card title={'Fresh Hub'} text={freshHub} img={freshpic} link={'https://basicneeds.uci.edu/'}/>{' '} */}
          </Col>
          <Col style={{paddingTop: "100px", paddingRight: "40px", paddingLeft: "60px"}}>
            {' '}
            <Card style={{ height: '18rem', width:'15rem' }}  border="light" as='a'>
              <Card.Img  style={{ height: '13rem' }} varient="top" src={bluelightpic}/>
              <Card.Body >

                <Card.Title style={{ fontSize: "12px" }}>
                 Emergency Blue Light Poles
                </Card.Title>
                <Card.Text style={{ fontSize: "11px" }} >{emBlueLight}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
          {/* <h1>HELLO WORLD</h1> */}
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feature;
