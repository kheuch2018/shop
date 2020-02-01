import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import { MDBRow} from 'mdbreact'
import Hr from '../components/Hr';
import Bubbles from '../components/Bubbles';
import LastProducts from '../components/LastProducts';

class Home extends Component {
    render() {
        return (
            <div >
            <Carousel/>
           
                <MDBRow className="">

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