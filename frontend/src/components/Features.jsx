import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import host from '../assets/images/host.png';

export default function Features() {
  return (
    <>
    <Container style={{minHeight: '100vh'}}>
      <h1 className="text-center">Features</h1>
      <Row> 
        <Col md={6}>
          <Card>
            <Card.Body>

              <div className="d-inline-flex justify-content-center w-100">
                <img src={host} alt="host image" width={'80px'} height={'100px'}/>
              </div>
              <Card.Title className="text-center">Host</Card.Title>
              <Card.Text className="text-center">Perks</Card.Text>
            
              <ul>
                <li>Add co-hosts and managers to events</li>
                <li>Manage event registration</li>
                <li>Check-in guests using ticket scanning</li>
                <li>Collect feedback from attendees after the event</li>
                <li>Promote events on explore pages for increased visibility</li>
                <li>Access insights on event discovery and registration</li>
                <li>Customize event pages with images and videos</li>
                <li>Utilize advanced integrations for event planning tasks</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          
        </Col>
      </Row>
    </Container>
  
    </>
  );
}