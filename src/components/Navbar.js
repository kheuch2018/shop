import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
 MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './SideNav'
import {NavLink} from "react-router-dom"

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        <SideNav/>
      <MDBNavbar color="white" dark expand="md" className="position-fixed" style={{zIndex: 2, width: '100%'}}>
        <MDBNavbarBrand style={{marginLeft: 100}} >
         <NavLink to="/" onClick={() => setTimeout(() => {window.location.reload(false) }, 200)} > <strong className="black-text">E-shop</strong></NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} className="elegant-color" />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} style={{textAlign: 'center'}} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink className="black-text"
              onClick={() => setTimeout(() => {window.location.reload(false) }, 200)} 
              to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" 
              onClick={() => setTimeout(() => {window.location.reload(false) }, 200)} 
              to="/all-products">All Products</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="black-text active" to="#!">Login</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="#!">Signup</MDBNavLink>
              </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light black-text" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light black-text" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar><br/><br/>
    </Router>
    );
  }
}

export default NavbarPage;