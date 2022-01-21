
import React from 'react';
import './PizzaListItem.css'
import Buttons from '../Buttons/Buttons.jsx'
console.log('buttons are ', Buttons);

function PizzaListItem({pizza, refreshMenu}){
    
    console.log('pizza is ', pizza)
    return(
            <>
            <div className= "IndividualPizzas">
                <h2> {pizza.name} </h2> 
                <div className="descriptionBox"><h3> {pizza.description}</h3> </div>
                <img src={pizza.image_path} width={100} height={100}/>
                <h2> {pizza.price}</h2>
                
               
            
            <Buttons/>
            </div>
            </>
    )
}

export default PizzaListItem;