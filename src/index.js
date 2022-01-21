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
        case 'SET_MENU_LIST':
        return action.payload
       
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
                        //we think this should be an empty object because 
                        // we will be send an object with arrays in it 
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

const customerInfoReducer = (state = [], action) => {
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

