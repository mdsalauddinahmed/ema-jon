import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart ,setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))

    },[])
    const handleProducts =(product)=>{
         const newCart =[...cart,product]
         setCart(newCart)
    }
    return (
        <>
         <div className='shop_container'>
            <div className="Product_container">
                {
                    products.map(product=><Product
                    
                   product={product} key={product.id} handleProducts={handleProducts}  > </Product> )
                }
            </div>
            <div className="Cart_container">
           <h4>this is cart_container</h4>
           <p>Selected items: {cart.length}</p>
            </div>
         </div>
            
        </>
    );
};

export default Shop;