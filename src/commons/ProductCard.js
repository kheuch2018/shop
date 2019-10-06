import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const ProductCard = ({img}) => {
  return (
    <MDBCol sm={4} style={{display: 'flex',justifyContent: 'center', marginTop: 40}} >
      <MDBCard style={{ width: "20rem", display: 'flex', alignItems: 'center' }}>
        <MDBCardImage className="img-fluid" src={img} waves style={{height: 200}} />
        <MDBCardBody>
          <MDBCardTitle>Product title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">See more</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ProductCard;