import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import heroImage from '../assets/images/PLMunBuilding.jpeg';

export default function Home() {

  return (
    <>
    <Container>
      <Row>
          <Col md={6} xs={12} sm={6} className='col-6 col-12 d-flex align-items-center' style={{minHeight: '100vh'}}>
            <div>
              <h2>Connecting PLMun students✨</h2>
              <p class="text-justify">
                Seamlessly organize and elevate your events at Pamantasan ng Lungsod ng Muntinlupa! Our event management platform
                ensures a smooth and hassle-free experience for student organizations, faculty, and school departments. From planning to
                execution, we provide the tools you need to create memorable and well-coordinated events. Let’s bring your ideas to
                life one successful event at a time!
              </p>
              <Button variant="outline-primary" className='me-2'>Sign up</Button>
              <Button variant="">Log in</Button>
            </div>
          </Col>
          <Col className='col-6 col-12 col-md-6 d-flex align-items-center justify-content-center'>
            <div className='d-inline-block'>
            <img
                alt="PLMun Building"
                src={heroImage}
                width="380px"
                height="405px"
                className="image-hero"
              />
            </div>
          </Col>
      </Row>
    </Container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#006B3C" fill-opacity="1"
        d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
      <path fill="#fdcc0d" fill-opacity="1"
        d="M0,224L80,229.3C160,235,320,245,480,208C640,171,800,85,960,85.3C1120,85,1280,171,1360,213.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#006B3C" fill-opacity="1"
        d="M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,186.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
      </path>
      <path fill="#FDCC0D" fill-opacity="1"
        d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
      </path>
    </svg>
    </>
  );
  
}