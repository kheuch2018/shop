import React, {Component} from 'react';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './commons/Navbar';
import Footer from './commons/Footer';

class App extends Component {
 render(){
   return (
    <BrowserRouter>
         <Navbar/>
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
