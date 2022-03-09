import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card  from './Card.jsx';
import anime from '../images/woman.jpg';

function Feature() {
    let womxnText = 'The center focues on womxn-specific needs and ideas through workshops, training, and space interaction in ways that promote personal empowerment'
    let freshHub = 'Fresh offers emergency food and toiletries, connects students to critical on and off-campus resources, and provides educational opportunities for students.'
    let emBlueLight = 'These phones provide 24-hour direct communication to UCIPD and can be used to report crime, fire, accidents, suspicious behavior or activity, or medical emergencies.'
  return <div>
  <h1>Featured Resources</h1>
<Container>
    <Row>
        <Col> <Card title={'Womxn\'s Center for Success'} text={womxnText}/> </Col>
        <Col> <Card title={'Fresh Hub'} text={freshHub}/> </Col>
        <Col> <Card title={'Emergency Blue Light Phones'} text={emBlueLight}/> </Col>
    </Row>
</Container>
</div>


}

export default Feature
