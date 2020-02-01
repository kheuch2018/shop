import React from 'react';
import ProductCard from './ProductCard';

const LastProducts = () => {
    return (
            <div className="row" style={{marginTop: 50}}>
                <ProductCard  img="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/mobile-browse/Apple/iPhone-Xr/blue/iphone-xr-blue-front.png" />
                <ProductCard  img="https://cdn.eglobalcentral.fr/images/detailed/78/canon-eos-r-mirrorless-digital-camera-with-rf-8lijus.jpg"/>
                <ProductCard  img="https://images-na.ssl-images-amazon.com/images/I/71gdBQP%2BqGL._UL1500_.jpg"/>
            </div>
    
    );
};

export default LastProducts;