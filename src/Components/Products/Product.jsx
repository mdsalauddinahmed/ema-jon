import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
 
    const {img,name,seller, price,quantity,ratings }=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
                <div className="product_name">{name}</div>
                <p>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button className="btn-cart">Add to Cart</button>
             
        </div>
    );
};

export default Product;