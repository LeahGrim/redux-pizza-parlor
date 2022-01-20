import axios from "axios";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerForm() {

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');
    const [orderType, setOrderType] = useState(false);
    const [customerToAdd, setCustomer] = useState({
        name:   customerName,
        address: customerAddress,
        city:   customerCity,
        zip:    customerZip,
        type:   orderType
    });
    const dispatch = useDispatch();

    const onAddCustomer = (evt) => {
        evt.preventDefault();
        console.log('Adding customer', customerName);
        // let customerToAdd = {

        // }
        setCustomer(evt)
        dispatch({
            type:   'ADD_CUSTOMER',
            payload:   customerToAdd
        })
    // upon form submit, redirect to /checkout
    }

    const clearCustomerForm = () => {
        setCustomerName('');
        setCustomerAddress('');
        setCustomerCity('');
        setCustomerZip('');
        orderType(false);
    }

    return (
        <>
            <section>
                <h2>Customer Information</h2>
                <form>
                    <input 
                        type="text"
                        placeholder="Name" 
                        value={customerName}
                        onChange={evt => setCustomerName(evt.target.value)}
                        required 
                        />
                    <input 
                        type="text"
                        placeholder="Street Address" 
                        value={customerAddress}
                        onChange={evt => setCustomerAddress(evt.target.value)}
                        required 
                        />
                    <input 
                        type="text"
                        placeholder="City" 
                        value={customerCity}
                        onChange={evt => setCustomerCity(evt.target.value)}
                        required 
                        />
                    <input  
                        type="text"
                        placeholder="Zip" 
                        value={customerZip}
                        onChange={evt => setCustomerZip(evt.target.value)}
                        required 
                        />
                    <button 
                        type="radio"
                        name="type"
                        value={false}
                        >Pickup</button>
                    <button 
                        type="radio"
                        name="type"
                        value={true}
                        >Delivery</button>
                    <button type="submit" onClick={(evt) => onAddCustomer}>Next</button>
                </form>
            </section>
        </>
    )

}

export default CustomerForm;