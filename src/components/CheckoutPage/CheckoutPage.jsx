import axios from 'axios';
import { useSelector } from 'react-redux';
import CustomerInfo from './CustomerInfo/CustomerInfo';
import CheckoutTable from './CheckoutTable/CheckoutTable';

function CheckoutPage() {

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
        // Make axios request
        

    }

    return (
        <>
        <h2>Step 3: Checkout</h2>
        <CustomerInfo />
        <CheckoutTable order={order}/>
        <button onClick={onCheckout}>CHECKOUT</button>
        </>
    )
}

export default CheckoutPage;