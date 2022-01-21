import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CustomerForm from '../CustomerForm/CustomerForm';

import OrderPizzaMenu from '../OrderPizzaMenu/OrderPizzaMenu.jsx';
function App() {


   // get pizza data from server on load
   useEffect(() => {
    console.log('in useEffect');
    refreshMenu();
  }, []);

  // define dispatch 
const dispatch = useDispatch();

//GET REQUEST TO LIST PIZZA ITEMS FROM SQL TO DOM:
function refreshMenu(){
  axios({
    method: 'GET',
    url: '/api/pizza'
  }).then( res => {
    //res.data is the list of pizzas 
    console.log('res.data is:', res.data);
    //update the dispatch to Redux 
    dispatch ({
      type: 'SET_MENU_LIST',
      payload: res.data
    })
  }).catch(error => {
    console.log('something funky happened on the GET request on App.jsx', error)
  })
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    <Router>
      <Route exact path="/order">
        <OrderPizzaMenu/>
      </Route>
      <Route exact path="/customerinfo">
        <CustomerForm />
      </Route>
      <Route exact path="/checkout">
        <CheckoutPage/>
      </Route>
   </Router> 
    </div>
  );
}

export default App;
