import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";



class InternalNav extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto tracking-widest text-lg">
                    <Nav.Link className="links" href="/">
                      HOME{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/whoWeAre">
                      WHO WE ARE{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/capabilities">
                      CAPABILITIES{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/CentersOfExcellence">
                      CENTERS OF EXCELLENCE{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/Contracts">
                      CONTRACTS{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/Careers">
                      CAREERS{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/Contact">
                      CONTACT{" "}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch>

              </Switch>
            </Router>
          </div>
        </div>
        <div className="bottomNav row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto tracking-widest">
                    <Nav.Link className="links" href="/post">
                      Logistics{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/project">
                      Program Management{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/about">
                      Engineering{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/about">
                      CyberSpace Operation{" "}
                    </Nav.Link>
                    <Nav.Link className="links" href="/about">
                      Knowledge & Information Management{" "}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch></Switch>
            </Router>
          </div>
        </div>
        <footer>
          <div className="fabIcons tracking-widest  space-x-4">
            <i className="fab fa-facebook-square text-3xl "></i>
            <i className="fab fa-twitter-square text-3xl "></i>
            <i className="fab fa-linkedin text-3xl "></i>
          </div>
          &copy;2021 Cervello Technologies. All Rights Reserved. No access, use
          or modification without Cervello's express consent in writing.
        </footer>
      </div>
    );
  }
}

export default InternalNav;
