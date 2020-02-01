import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavLink, MDBInput } from 'mdbreact';

class ModalLayout extends Component {



render() {
    const {title,children,btnTitle,toggle,modal14} =this.props
  return (
    <MDBContainer style={{position:"absolute"}}>
        
  <MDBNavLink onClick={()=>toggle(14)} className="black-text active" to="#!">{btnTitle || title } </MDBNavLink>
    <MDBModal isOpen={modal14} toggle={()=>toggle(title)} centered>
      {/* <MDBModalHeader toggle={() =>toggle(title)}>{title || "ModalTitle"}</MDBModalHeader> */}
      <MDBModalBody>
      <form>
        <p className="h5 text-center mb-4">{title || "ModalTitle"}</p>
        <div className="grey-text" >
          <MDBInput
            label="Type your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Type your password"
            icon="lock"
            group
            type="password"
            validate
          />
          {title.toLowerCase() ==="signup" && <MDBInput
            label="Confirm your password"
            icon="lock"
            group
            type="password"
            validate
          />}
        </div>
        <div className="text-center">
  <MDBBtn>{title}</MDBBtn>
        </div>
        </form>
      </MDBModalBody>
      {/* <MDBModalFooter>
        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
        <MDBBtn color="primary">Save changes</MDBBtn>
      </MDBModalFooter> */}
    </MDBModal>
  </MDBContainer>           
    );
  }
}

export default ModalLayout;