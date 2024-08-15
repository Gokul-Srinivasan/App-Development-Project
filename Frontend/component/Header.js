import { Link } from 'react-router-dom';
import './Homepage.css';
import logo from './Images/v.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton'; // Import IconButton for better button styling

export default function Header() {
    return (
        <div className="homeapp">
            <nav className="navbar navbar-expand-lg navbar-light bg-light header-nav">
                <div className="htext">
                    <img src={logo} alt="Logo" style={{ width: '100px', height: '72px' }} />
                    <Link to="/home" className="brand-name">
                        <p>Starv Rental Studio</p>
                    </Link>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/description" className="nav-link">DESCRIPTION</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">LOGIN</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prof" className="nav-link">PROFILE</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <IconButton className="cart-icon-button">
                                <ShoppingCartIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
