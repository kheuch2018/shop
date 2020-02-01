import React from 'react';
import Bubble from './Bubble';
const Bubbles = () => {
    return (
        <div className="row" style={{marginTop: 50}}>
                    
            <Bubble text="Phone & tablets" color="pink" />
            <Bubble text="Computers" color="purple" />
            <Bubble text="Home & Office" color="brown" />
            <Bubble text="Electronics" color="indigo" />
            <Bubble text="Health & Beauty" color="cyan" />
            <Bubble text="Fashion" color="amber" />
         
         
         </div>
    );
};

export default Bubbles;