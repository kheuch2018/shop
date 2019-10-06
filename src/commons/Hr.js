import React from 'react';

const Hr = ({text}) => {
    return (
        <div className="container" style={{width: '80%', height: 20, borderBottom: '1px solid black', textAlign: 'center', marginTop: 100}}>
            <span style = {{fontSize: 30, backgroundColor: '#FFFFFF', padding: '0 10px', fontWeight:'bold'}}>
                {text}
            </span>
        </div>
    );
};

export default Hr;