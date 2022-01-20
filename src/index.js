import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react';
import './index.css';

import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

<<<<<<< HEAD

// MENU REDUCERS
// - List of pizzas available for order
// - This is rendered on screen one
=======
ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));

>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89


const menuReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }

}

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
<<<<<<< HEAD

//create a reducer for order
//when you click add, the components added should be visible in cart
//CART

=======
>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89
const checkoutReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
<<<<<<< HEAD

}

=======
}
>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89
// CUSTOMER INFO REDUCER
// - Screen two
//      - name, address, city, zip
//      { name: name, address: address, city: city, zip: zip }
//      - delivery or pickup

<<<<<<< HEAD
const customerReducer = (state = [], action) => {
=======
const customerInfoReducer = (state = [], action) => {
>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89
    switch (action.type) {
        default:
            return state;
    }
<<<<<<< HEAD

}

=======
}
>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89
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

<<<<<<< HEAD
*/

=======
>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89
// const adminReducer = (state = [], action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
<<<<<<< HEAD
// }

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
=======
// }
>>>>>>> a612aed90dcc4f627ac16b96b538875454601b89
