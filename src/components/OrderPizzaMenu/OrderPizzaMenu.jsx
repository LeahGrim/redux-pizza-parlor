import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import PizzaListItem from '../PizzaListItem/PizzaListItem.jsx'
import { useHistory } from 'react-router-dom';


function OrderPizzaMenu({refreshMenu}){

    // Set up history
    const history = useHistory();

    // Pull pizzaList from store
    const pizzaList = useSelector(store => store.menuReducer)

    // onNext function
    function onNext() {
        history.push('/customerinfo')
    }


    return (
        <>
                <div className= "PizzaPlacement">
                    {pizzaList.map(pizza => (
                        <PizzaListItem 
                                key= {pizza.id}
                                pizza= {pizza}
                                refreshMenu= {refreshMenu}
                                />
                    ))}
                </div>
                <button onClick={onNext}>Next</button>
        </>
    )
         
}
export default OrderPizzaMenu;