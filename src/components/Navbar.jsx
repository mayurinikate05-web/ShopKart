import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
const Navbar = () => {
    const { theme, dispatch } = useContext(ThemeContext);
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm px-5 h-100">

            <h4 className="logo fw-bold mb-0">Shop<span style={{ color: "blue" }}>Kart</span></h4>
            <div className="search-box">
                <input type="text"
                    className="form-control"
                    placeholder="Search products..."
                />
            </div>
            <ul className="nav-links d-flex gap-4 text-decoration-none mb-0 ms-auto">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
                <button className="theme-btn"onClick={() => dispatch({ type: 'THEME_TOGGLE' })}>
                    {theme === 'dark'? 'light':'dark'}
                </button>
            </ul>
        </nav>
    );
}
export default Navbar