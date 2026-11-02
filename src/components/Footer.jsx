import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <section className="footer-brand">
                    <Link className="footer-logo" to="/" aria-label="ShopKart home">
                        Shop<span>Kart</span>
                    </Link>
                    <p>Your everyday shopping, made simple.</p>
                    <Link className="footer-contact-link" to="/contact">
                        Need help? Get in touch
                    </Link>
                </section>

                <nav className="footer-column" aria-label="Shop">
                    <h2>Shop</h2>
                    <Link to="/products">All products</Link>
                    <Link to="/cart">Your cart</Link>
                </nav>

                <nav className="footer-column" aria-label="About ShopKart">
                    <h2>About</h2>
                    <Link to="/about">Our story</Link>
                    <Link to="/contact">Contact us</Link>
                </nav>

                <section className="footer-column footer-support">
                    <h2>Here to help</h2>
                    <p>Questions about an order or a product?</p>
                    <Link to="/contact">Visit our contact page</Link>
                </section>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ShopKart. All rights reserved.</p>
                <p>Happy shopping!</p>
            </div>
        </footer>
    );
};

export default Footer;
