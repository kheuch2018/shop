import React, { Component } from 'react';
import Carousel from '../commons/Carousel';
import { MDBRow} from 'mdbreact'
import Hr from '../commons/Hr';
import Bubbles from '../commons/Bubbles';
import LastProducts from '../commons/LastProducts';
import Footer from '../commons/Footer'

class Home extends Component {
    render() {
        return (
            <div>
           
                <MDBRow className="no-gutters">
                <Carousel/>

                <div className="container">
                    <Hr text="Our Categories" />
                    <Bubbles/>
                
                    <Hr text="Last Products" />
                    <LastProducts/>
                </div>

                </MDBRow>
          
            </div>
        );
    }
}

export default Home;