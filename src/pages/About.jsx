import React from 'react'
import { Link } from 'react-router-dom'
import Brands from '../data/Brands'
import Brand from '../components/Brand'

const About = () => {
    return (
        <div className='about-page'>
            <div className='first-section'>
                <h2>ABOUT US</h2>
                <h4>Making everyday shopping simpler, faster and more enjoyable</h4>
                <p>At ShopKart, we believe great products should be accessible
                    to everyone. We are an online shopping destination offering
                    a wide range of high-quality products at great prices,
                    delivered right to your doorstep.</p>
                <p>From fashion and electronics to home essentials and more —
                    we're here to make shopping easier, better, and more
                    delightful for you.</p>
                <Link  to='/products'>Shop Now</Link>
                <h5>Shop Smarter,Live Better</h5>
            </div>
            <div className='second-section'>
                <h3>Trusted brands</h3>
                <div className='brands'>
                    {Brands.map((brand)=>(
                        <Brand
                        name={brand.name}
                        image={brand.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About


