import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import PizzaListItem from '../PizzaListItem/PizzaListItem.jsx'
function OrderPizzaMenu({refreshMenu}){
    const pizzaList = useSelector(store => store.menuReducer)
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
        </>
    )
         
}
export default OrderPizzaMenu;