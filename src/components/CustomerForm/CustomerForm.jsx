import axios from "axios";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CustomerForm.css';

function CustomerForm() {

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');
    const [orderType, setOrderType] = useState(true);
    // const [customerToAdd, setCustomer] = useState({
    //     name:   customerName,
    //     address: customerAddress,
    //     city:   customerCity,
    //     zip:    customerZip,
    //     type:   orderType
    // });
    const dispatch = useDispatch();

    const onAddCustomer = (evt) => {
        evt.preventDefault();
        console.log('Adding customer', customerName);
        // setCustomer(evt);
        // console.log('Adding customer', customerToAdd);
        dispatch({
            type:   'ADD_CUSTOMER',
            payload:   {
                name:   customerName,
                address: customerAddress,
                city:   customerCity,
                zip:    customerZip,
                type:   orderType

            }
        })
        // clearCustomerForm();
    // upon form submit, redirect to /checkout
    }

    const clearCustomerForm = () => {
        setCustomerName('');
        setCustomerAddress('');
        setCustomerCity('');
        setCustomerZip('');
        setOrderType(false);
    }

    return (
        <>
            <section>
                <h2>Customer Information</h2>
                <form 
                    className="customer-form" 
                    onSubmit={(evt) => onAddCustomer(evt)}>
                    <input 
                        type="text"
                        className="form-control"
                        id="customer-name"
                        placeholder="Name" 
                        onChange={evt => setCustomerName(evt.target.value)}
                        value={customerName}
                        required 
                        />
                    <input 
                        type="text"
                        className="form-control"
                        id="customer-address"
                        placeholder="Street Address" 
                        onChange={evt => setCustomerAddress(evt.target.value)}
                        value={customerAddress}
                        required 
                        />
                    <input 
                        type="text"
                        className="form-control"
                        id="customer-city"
                        placeholder="City" 
                        onChange={evt => setCustomerCity(evt.target.value)}
                        required 
                        />
                    <input  
                        type="text"
                        className="form-control"
                        id="customer-zip"
                        placeholder="Zip" 
                        onChange={evt => setCustomerZip(evt.target.value)}
                        required 
                        />
                    <div>
                        <input 
                            type="radio"
                            className="form-control"
                            name="type"
                            value={false}
                            onChange={(evt) => 
                                setOrderType(false),
                                console.log(orderType)
                            }
                            />Pickup 
                        <input 
                            type="radio"
                            className="form-control"
                            name="type"
                            value={true}
                            onChange={(evt) => 
                                setOrderType(true),
                                console.log(orderType)
                            }
                            />Delivery 
                    </div>
                    <button type="submit" >Next</button>
                </form>
            </section>
        </>
    )

}

export default CustomerForm;