import React from "react";
import {Navbar, Nav, Row, Col} from "react-bootstrap";
import "./header.css"



function Header () {
    return ( 

<Nav fill defaultActiveKey="/home" as="ul" style={{padding: 10, backgroundColor: "darkslategray", color: "white"}}>
<Navbar >
    <Navbar.Brand style={{color: "white"}} href="#home">Workout App</Navbar.Brand>
  </Navbar>
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>

        // <nav className="navbar main-header" style={{padding: 10, backgroundColor: "darkslategray", color: "white"}}>
           
           
        //     <ul className="nav">
        //         <div className="row">
        //             <li className="nav-link">
        //                 Workout App
        //             </li>
        //         </div>
        //     </ul>
        // </nav>
    )
}

export default Header;