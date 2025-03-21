import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import about1 from '../assets/images/team-picture.png';
import matthew from '../assets/images/matthew.jpg';
import Lawrence from '../assets/images/Lawrence.jpg';
import duquilar from '../assets/images/duquilar.jpg';
import illanah from '../assets/images/illanah.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope  } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <h1 className="text-center mb-4">About us</h1>
        <Container>
          <Row>
            <Col md={5} className='mb-4'>
              <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={about1} className='img-fluid d-inline-block' />
                <Card.Body className='my-3'>
                  <Card.Text>
                    We are <b>Matthew, Lawrence, James, and Illannah,</b> students from <b>BSCS-1B</b> at Pamantasan ng Lungsod ng
                    Muntinlupa (PLMun).
                    This website is part of our Web Technology subject, under the guidance of our professor, <b>Mrs. Umali.</b>
                    <br></br> <br></br>
                    Our goal is to create a comprehensive event management platform tailored for student organizations and societies
                    at
                    PLMun. This platform will streamline event planning, coordination, and execution, making it easier for
                    organizations to
                    manage their activities efficiently. Whether it's a seminar, a workshop, a competition, or a major school event –
                    our
                    website is designed to help organizers stay organized and attendees stay informed.
                    <br></br> <br></br>
                    Through this project, we aim to apply our web development skills, enhance collaboration within student
                    communities, and
                    contribute to a more dynamic and well-managed event culture at PLMun.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Row className='g-4'>
                {/* Matthew */}
                <Col md={6} lg={6} sm={12}>
                  <Card>
                    <div class="mx-auto my-3">
                      <img src={matthew} alt="" className='members-img' />
                    </div>
                    
                    <Card.Body>
                      <Card.Text>
                        <p class="card-text text-center">Matthew David C. Fernandez <br></br> Full-stack Web Developer</p>
                      </Card.Text>
                      <div class="icons-about">
                        <a href="https://www.facebook.com/Matthew.act546" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </a>
                        <a href="https://github.com/Matthew-act546" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=matthewyt765@gmail.com" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                {/* Lawrence */}
                <Col md={6} lg={6} sm={12}>
                  <Card>
                    <div class="mx-auto my-3">
                      <img src={Lawrence} width={'auto'} alt="" className='members-img' />
                    </div>
                    
                    <Card.Body>
                      <Card.Text>
                        <p class="card-text text-center">Lawrence John S. Alibangbang <br></br> Front-end Developer</p>
                      </Card.Text>
                      <div class="icons-about">
                        <a href="https://www.facebook.com/Laaawrence" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </a>
                        <a href="https://github.com/Matthew-act546" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alawrencesalamat@gmail.com" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* james */}
                <Col md={6} lg={6} sm={12}>
                  <Card>
                    <div class="mx-auto my-3">
                      <img src={duquilar} alt="" className='members-img' />
                    </div>
                    
                    <Card.Body>
                      <Card.Text>
                        <p class="card-text text-center">James Lawrenz Duquilar <br></br> Back-end Developer</p>
                      </Card.Text>
                      <div class="icons-about">
                        <a href="https://www.facebook.com/james.duquilar" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </a>
                        <a href="https://github.com/Yuri-Guro" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to=jamesduquilar0128@gmail.com&tf=cm" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Cervantes */}
                <Col md={6} lg={6} sm={12}>
                  <Card>
                    <div class="mx-auto my-3">
                      <img src={illanah} width={'auto'} alt="" className='members-img' />
                    </div>
                    
                    <Card.Body>
                      <Card.Text>
                        <p class="card-text text-center">Illannah Rayne Cervantes <br></br> UI & UX Designer</p>
                      </Card.Text>
                      <div class="icons-about">
                        <a href="https://www.facebook.com/illannah.mendoza.cervantes" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </a>
                        <a href="https://github.com/Cillannah" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to=Illannahc@gmail.com&tf=cm" style={{color: 'black'}} target='_blank'>
                          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                

              </Row>
            </Col>
          </Row>

        </Container>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fdcc0d"fill-opacity="1"
          d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
        <path fill="#006B3C" fill-opacity="1"
          d="M0,224L80,229.3C160,235,320,245,480,208C640,171,800,85,960,85.3C1120,85,1280,171,1360,213.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FDCC0D" fill-opacity="1"
          d="M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,186.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
        <path fill="#006B3C" fill-opacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,245.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
      </svg>
  </>
  );
}