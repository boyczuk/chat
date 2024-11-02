import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './TopNavbar.css';

function TopNavbar() {
    return (
        <div className='pages-nav'>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/messages">Messages</Link>
            </div>

            <div className='login-button'>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default TopNavbar;