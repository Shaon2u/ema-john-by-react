import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for(let i = 0; i < cart.length; i++){
    const product = cart [i];
    total = total + product.price * product.quantity;
    }


    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }

    else if (total > 50){
        shipping = 5;
    }

    else if (total > 25){
        shipping = 10;
    }

    else if (total > 0){
        shipping = 15;
    }

    // const tax = Math.round(total/10);
    const productPrice = (total).toFixed(2);
    const tax = (total/10).toFixed(2);
    const grandTotal = (Number(productPrice) + shipping + Number(tax)).toFixed(2);

    // const formatNumber = num =>
    // const precision = num.toFixed(2);
    // return Number(precision);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {productPrice} </p>
            <p><small>Shipping : {shipping}</small></p>
            <p><small>Tax (10%) : {tax}</small></p>
            <p>Total Price : {grandTotal} </p>
            <br/>
            {
                props.children
            }



        </div>
    );
};

export default Cart;