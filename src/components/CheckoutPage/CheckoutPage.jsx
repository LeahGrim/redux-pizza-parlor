import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import CustomerInfo from './CustomerInfo/CustomerInfo';
import CheckoutTable from './CheckoutTable/CheckoutTable';
import { useHistory } from 'react-router-dom';

function CheckoutPage() {

    // Set up dispatch
    const dispatch = useDispatch();

    // Set up history
    const history = useHistory();

    // Pull customer info and order info from store
    const customerInfo = useSelector(store => store.customerInfoReducer);
    const order = useSelector(store => store.checkoutReducer);

    // Declare onCheckout function
    function onCheckout() {
        console.log('in onCheckout');
        // Confirm checkout
        let confirm = window.confirm('Are you sure you want to checkout?');
        // Stop onCheckout if cancelled
        if (!confirm) {
            return;
        }
        // Create object to POST
        let finalOrder = {
            customer_name: customerInfo.name,
            street_address: customerInfo.address,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.type,
            total: order.total,
            pizzas: order.pizzas
        }
        console.log('Object to add: ', finalOrder);

        // Make axios POST request if confirmed
        axios.post('/api/order', finalOrder )
        .then( res => {
            console.log('POST /api/order success', res.data);
            // Dispatch to clear checkoutReducer and customerInfoReducer
            dispatch({
                type: 'RESET_CHECKOUT'
              })
            dispatch({
                type: 'RESET_INFO'
            })
            // Navigate back to order page
            history.push('/');

        })
        .catch( err => {
            console.error('POST /api/order failed', err);
        })

    }

    return (
        <>
        <h2>Step 3: Checkout</h2>
        <CustomerInfo customerInfo={customerInfo}/>
        <br/>
        <CheckoutTable order={order}/>
        <button onClick={onCheckout}>CHECKOUT</button>
        </>
    )
}

export default CheckoutPage;