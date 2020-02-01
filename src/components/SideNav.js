import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./SideNav.css" 
import MenuAccordion from './MenuAccordion';

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }
 
  render () {
    return (
      <Menu className="white">
        <MenuAccordion/>
      </Menu>
    );
  }
}

export default Example