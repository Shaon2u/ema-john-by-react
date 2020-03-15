import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = (props) => {
    console.log(props.product.key);

    const {img, seller, price, stock, name, key} = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller} </small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock! Order soon</small></p>
                { props.showAddToCart === true && <button
                    className="add-to-cart-btn"
                    onClick={() => props.handleAddProduct(props.product)} >Add to Cart</button> }
            </div>
        </div>
    );
};

export default Product;