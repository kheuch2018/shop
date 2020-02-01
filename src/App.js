import React, {Component} from 'react';
import Home from './containers/Home';
import AllProducts from './containers/AllProducts';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
