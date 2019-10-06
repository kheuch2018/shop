import React from 'react';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {NavLink} from 'react-router-dom'

const NavArticle = ({category,subCategories = []}) => {
    return (      
        <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>
                {category}
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            {subCategories.map((sub,i) => <NavLink onClick={() => setTimeout(() => {
               window.location.reload(false) 
            }, 200)} to={"/all-products/"+sub} key={i}><p style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center',color: 'white'}}>  {sub}  </p></NavLink>)}
        </AccordionItemPanel>
    </AccordionItem>
    );
};

export default NavArticle;