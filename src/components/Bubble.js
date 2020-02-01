import React from 'react';
import {MDBBtn, MDBCol} from 'mdbreact'


const Bubble = ({text, color="elegant"}) => {

    var textArray = text.split(" ")

    return (
        <MDBCol sm={4} style={{display: 'flex', justifyContent: 'center', marginTop: 50}} >
             <MDBBtn color={color} style={{borderRadius: 100, width: 150, height:150, fontSize: 12}}>{textArray.map((elem,i) => <span key={i}>{elem}<br/></span>)}</MDBBtn>
        </MDBCol>
    );
};

export default Bubble;