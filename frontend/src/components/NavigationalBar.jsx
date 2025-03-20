import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

export default function NavigationalBar() {

  return (
    <nav>
      <Navbar expand="lg" bg="primary">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
            <img
                alt="PLMun connect logo"
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <span className='text-white title-nav'>PLMun Connect</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
              <Nav.Link href="#link" className='text-white'>Link</Nav.Link>
              <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
