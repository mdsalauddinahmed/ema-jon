import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <>
         <div className='shop_container'>
            <div className="Product_container">
                {
                    products.map(product=><Product
                    
                   product={product} key={product.id} > </Product> )
                }
            </div>
            <div className="Cart_container">
           <h4>this is cart_container</h4>
            </div>
         </div>
            
        </>
    );
};

export default Shop;