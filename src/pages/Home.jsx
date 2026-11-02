import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="home-hero-content">
                    <p className="home-eyebrow"><span /> YOUR EVERYDAY SHOPPING, REIMAGINED</p>
                    <h1>Little things.<br /><span>Big happiness.</span></h1>
                    <p className="home-description">
                        Discover something lovely for yourself and your home. Your next favorite find is just a click away.
                    </p>
                    <Link to="/products" className="home-shop-button">
                        Explore ShopKart <span aria-hidden="true">→</span>
                    </Link>
                    <p className="home-hero-note">A little joy in every order <span aria-hidden="true">✦</span></p>
                </div>
                <div className="home-hero-visual">
                    <img
                        className="home-hero-image"
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90"
                        alt="Friends enjoying a day of shopping"
                    />
                    <div className="home-image-badge">
                        <span aria-hidden="true">✦</span>
                        <p>Find your<br /><strong>happy place</strong></p>
                    </div>
                    <span className="home-image-caption">GOOD FINDS, GOOD FEELINGS</span>
                </div>
            </section>

            <section className="home-highlights" aria-label="ShopKart highlights">
                <div className="home-highlight">
                    <span className="home-highlight-icon" aria-hidden="true">✦</span>
                    <h2>Something for everyone</h2>
                    <p>Explore a variety of everyday essentials.</p>
                </div>
                <div className="home-highlight">
                    <span className="home-highlight-icon" aria-hidden="true">♡</span>
                    <h2>Easy shopping</h2>
                    <p>Browse products and add your favorites to cart.</p>
                </div>
                <div className="home-highlight">
                    <span className="home-highlight-icon" aria-hidden="true">?</span>
                    <h2>Need help?</h2>
                    <p><Link to="/contact">Contact us</Link> if you have any questions.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;