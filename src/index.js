import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react';
import './index.css';

import App from './components/App/App';


// MENU REDUCERS
// - List of pizzas available for order
// - This is rendered on screen one

//create a reducer for pizza list
// when we load the order page, we will say render a menu
//MENU - PIZZA LIST
//create a reducer for customer info (see screen two)
//takes customer info and

const menuReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }

}

// CART/ORDER REDUCER
// - What current user/orderer has in their cart
// - This is part of state that tracks current users order
/*
    {
        pizzas: pizzas
        total: total
    }
*/

//create a reducer for order
//when you click add, the components added should be visible in cart
//CART

const checkoutReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }

}

// CUSTOMER INFO REDUCER
// - Screen two
//      - name, address, city, zip
//      { name: name, address: address, city: city, zip: zip }
//      - delivery or pickup

const customerReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }

}

/*
// ADMIN/ACTIVE ORDERS
// - Pull from the cart reducer and customer info reducer to 
//   to create a new object for each order
// - Clear arrays/data in other stores once the order is pushed here
// { name: name,
    address: address,
    city: city, 
    zip: zip,
    pizzas: pizzas,
    total: total    
    }

*/

// const adminReducer = (state = [], action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
