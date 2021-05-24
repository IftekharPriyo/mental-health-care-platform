import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Navigation.css';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand className='logoName' href="#home">Mental Health Support Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className='navElems' href="#aboutUs">About Us</Nav.Link>
      <Nav.Link className='navElems' href="#chatbot">Chatbot</Nav.Link>
      <NavDropdown className='navElems' title="Forum" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Forum 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Forum 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Forum 3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  href="#action/3.4">Video Conference</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      {
        loggedInUser.email? <Nav.Link style={{color: 'white'}} href="#link">{loggedInUser.name}</Nav.Link> :
        <Nav.Link className='signIn' href="#signin">SignIn</Nav.Link>
      } 
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    );
};

export default Navigation;