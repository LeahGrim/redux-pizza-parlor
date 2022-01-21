import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import logger from 'redux-logger';
import App from './components/App/App';


const menuReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MENU_LIST':
        return action.payload
       
        default:
        return state;
    }
}

//

// CART/ORDER REDUCER
// - What current user/orderer has in their cart
// - This is part of state that tracks current users order
/*
    {
        pizzas: pizzas [{id: id, pizza: name, cost: cost, quantity: 1}]
        total: total
    }
*/
//we think this should be an empty object because 
// we will be send an object with arrays in it 
const checkoutReducer = (state = { pizzas: [{ id: 1, pizza: 'pepperoni', cost: '12.99', quantity: 1 }], total : '12.99'}, action) => {
    switch (action.type) {
        case 'RESET_CHECKOUT': 
            return { pizzas: [], total: 0 };
        case 'ADD_PIZZA_TO_CHECKOUT' :
            return { pizzas: [{ id: 1, pizza: 'pepperoni', cost: '12.99', quantity: 1 }], total : '12.99'}
        default:
            return state;
    }
}

// CUSTOMER INFO REDUCER
// - Screen two
//      - name, address, city, zip
//      { name: name, address: address, city: city, zip: zip, delivery: true/false }
//      - delivery or pickup

const customerInfoReducer = (state = {name: 'Chris', address: '1234 Prime Dr', city: 'Minneapolis, MN', zip: '55410', type: 'delivery' }, action) => {
    switch (action.type) {
        case 'RESET_INFO':
            return { name: '', address: '', city: '', zip: '', type: '' };
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

