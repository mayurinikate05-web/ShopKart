import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext';

const Product=({ id,title, image, price, category,rating }) => {
    const {addToCart} =useCart();
    const product ={
        id,
        title,
        image,
        price,
        category,
        rating
    }
    return (

        <div className="card" style={{ width:'300px'}}>
            <img className="card-img-top" src={image} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">${price}</p>
                <p className="card-text">{category}</p>
                <h4>Product Rating:{rating}</h4>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        </div>

    )
}

export default Product
