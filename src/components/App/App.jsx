import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
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
    }).catch(error => {
      console.log('something funky happened on the GET request on App.jsx', error)
    })
  })
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <OrderPizzaMenu refreshMenu= {refreshMenu}/>
    </div>
  );
}

export default App;
