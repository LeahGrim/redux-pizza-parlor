import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

function Buttons({pizza}){
    let dispatch = useDispatch();
    let currentCheckoutReducer= useSelector(store => store.checkoutReducer) 

    // call dispatch to add the data to the store (checkoutreducer)
    //is it name or pizza.name? 
                                             // are these all the things we are sending?
    let [pizzaToAdd, setPizzaToAdd] = useState({id:'', name: '', price: 0, quantity:0 })
    let [currentPizzas, setCurrentPizzas] = useState(currentCheckoutReducer.pizzas);

    const addPizzaToCheckout = ()=> {
        //pull from reducer the total: 
        let newTotal= Number(currentCheckoutReducer.total) + Number(pizza.price)
        // create new pizza object to add to state 
        let pizzaToAdd = {
            id: pizza.id,
            pizza: pizza.name,
            cost: pizza.price,
            quantity: 1, 
        }
        console.log('pizza to send is', pizzaToAdd);
        console.log('current pizzas is', currentPizzas);
        // Create new state variable to send to reducer
        setCurrentPizzas(currentPizzas.push(pizzaToAdd));
        console.log('new pizzas is', currentPizzas);

        console.log('new Total is', newTotal);

        let newCheckoutReducer = {
            pizzas: currentPizzas,
            total: newTotal
        }
        
        console.log(newCheckoutReducer);
        //TODO dispatch here 
        dispatch ({
            type: 'ADD_PIZZA_TO_CHECKOUT',
            payload: newCheckoutReducer 
        });
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

