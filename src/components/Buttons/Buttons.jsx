import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

function Buttons({pizza}){
    // call dispatch to add the data to the store (checkoutreducer)
    //is it name or pizza.name? 
                                             // are these all the things we are sending?
    let [pizzaToAdd, setPizzaToAdd] = useState({id:'', name: '', price: 0, quantity:0 })
    
    let dispatch = useDispatch();
    let priceFromCheckout= useSelector(store => store.checkoutReducer.total) 
    const addPizzaToCheckout = ()=> {
        //pull from reducer the total: 
        let newTotal= Number(priceFromCheckout) + Number(pizza.price)
    // create object to send to checkout 
        let pizzaToSend = {
            id: pizza.id,
            pizza: pizza.name,
            cost: pizza.price,
            quantity: 1, 
        }
        console.log('pizza to send is', pizzaToSend);
        console.log('new Total is', newTotal);
        
        //TODO dispatch here 
        dispatch ({
            type: 'ADD_PIZZA_TO_CHECKOUT',
            payload: {pizzaToSend, newTotal} 
        })
    }

    return(
       <>
        <div> 
         
            <button className= "Buttons" type= "submit" onClick={addPizzaToCheckout}> 
                                          ADD TO CART 
                </button>
               
                <button className= "Buttons" type= "submit"> 
                                        REMOVE FROM CART
                </button>
          
        </div>
        </>
    )
}
export default Buttons;

