import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();
    const formSubmit = () => {
        alert('Success!');
        reset();
    }
    return (

        <div className="contact-page">
            <h1>Contact Information</h1>

            <div className="contact-container">

                <div className="contact-info">
                    <ul className="contact-list">
                        <li><i className="fa-solid fa-comments"></i> Chat</li>
                        <li><i className="fa-solid fa-phone"></i> Call</li>
                        <li><i className="fa-solid fa-building"></i> Office</li>
                    </ul>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps?q=IT%20Vedant%20Katraj%20Pune&output=embed"
                            title="IT Vedant Katraj Map"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>


                    <div className="social-section">
                        <h4>Follow Us</h4>

                        <div className="social-icons">
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>

                            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoFocus
                            {...register('name', {
                                required: 'Name is mandatory'
                            })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                        <input
                            type="email"
                            placeholder="Enter Email"
                            {...register('email', {
                                required: 'Email is mandatory',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                                    message: 'Enter a valid Gmail ID'
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}

                        <input
                            type="tel"
                            placeholder="Enter Number"
                            {...register('contact', {
                                required: 'Contact number is mandatory',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Enter a valid 10-digit number'
                                }
                            })}
                        />
                        {errors.contact && <p>{errors.contact.message}</p>}

                        <div className="dropdown">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Dropdown button
                            </button>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Product</a></li>
                                <li><a className="dropdown-item" href="#">Order</a></li>
                                <li><a className="dropdown-item" href="#">Return</a></li>
                                <li><a className="dropdown-item" href="#">Payment</a></li>
                            </ul>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Contact
