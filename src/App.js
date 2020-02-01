import React, {Component} from 'react';
import Home from './containers/Home';
import AllProducts from './containers/AllProducts';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ModalLayout from './components/ModalLayout';

class App extends Component {

  state = {
    modal14: false,
    title: ""
  }
  
  toggle = (title) => {
    //let modalNumber = 'modal' + nr
    this.setState({
      modal14: !this.state.modal14,
      title
    });
  }


 render(){
   return (
    <BrowserRouter>
         <Navbar toggle={this.toggle} />
        <ModalLayout toggle={this.toggle} modal14={this.state.modal14} title={this.state.title}/>

      <Switch>
        <Route exact path="/" component={Home}   />
        <Route path="/all-products" component={AllProducts}  />
      </Switch>
      <Footer/>
    </BrowserRouter>
  
   )
 }
}

export default App;
