import React from 'react';
import {Accordion} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import NavArticle from './NavArticle';

const MenuAccordion = () => {
    return (
        <div>
             <Accordion allowZeroExpanded>
                <NavArticle category={"Electronic"} subCategories={["TV","Camera", "Audio", "TV Accessories"]} />
                <NavArticle category={"Phone & tablets"} subCategories={["Phones Accessories", "Tablets","Smartphones"]} />
                <NavArticle category={"Computers"} subCategories={["Computer screens", "Laptops", "Computer Charger"]} />
                <NavArticle category={"Home & Office"} subCategories={["Air-conditioner","Coffee machine", "Furniture"]}  />
                {/* <NavArticle category={"Supermarket"} subCategories={["Drinks","Grocery"]}/> */}
                <NavArticle category={"Health & Beauty"} subCategories={["Perfume","hair care"]} />
                <NavArticle category={"Fashion"} subCategories={["Clothes","Shoes","watches"]} />
                
               
            </Accordion>
        </div>
    );
};

export default MenuAccordion;