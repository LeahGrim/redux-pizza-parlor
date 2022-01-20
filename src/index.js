import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// MENU REDUCERS
// - List of pizzas available for order
// - This is rendered on screen one

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
        pizzas: pizzas [{id: id, pizza: name, cost: cost, quantity: 1}]
        total: total
    }
*/
const checkoutReducer = (state = { pizzas: [{id: 1, pizza: 'pepperoni', cost: '13.99', quantity: 1}, {id: 2, pizza: 'cheese', cost: '12.99', quantity: 1}], total: '26.98' }, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
// CUSTOMER INFO REDUCER
// - Screen two
//      - name, address, city, zip
//      { name: name, address: address, city: city, zip: zip, delivery: true/false }
//      - delivery or pickup

const customerInfoReducer = (state = {name: 'Chris', address: '1234 Prime Dr', city: 'Minneapolis', zip: '55410', type: 'delivery' }, action) => {
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

const store = createStore(
    combineReducers({
        menuReducer,
        checkoutReducer,
        customerInfoReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

