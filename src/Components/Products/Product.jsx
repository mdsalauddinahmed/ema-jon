import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //    
    const {img,name,seller, price, ratings, category }=props.product;

     const handleProducts = props.handleProducts;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
                <div className="product_name">{name}</div>
                <p>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Category: { category}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={()=>handleProducts(props.product)} className="btn-cart">
                Add to Cart   <FontAwesomeIcon icon={faShoppingCart} />
            </button>
             
        </div>
    );
};

export default Product;