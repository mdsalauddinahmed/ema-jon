import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        // console.log(product)
         const newCart =[...cart,product]
         setCart(newCart)
        //  console.log(newCart)
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
               <Cart cart={cart}></Cart>
            </div>
         </div>
            
        </>
    );
};

export default Shop;