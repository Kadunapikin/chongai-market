import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
<header className="bg-blue-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My E-Commerce Site</h1>
        <nav className='flex'>
            {/* <a href="/" className="inline-block p-2 hover:bg-blue-700 rounded">Home</a>
            <a href="/cart" className="inline-block p-2 hover:bg-blue-700 rounded">Cart</a>
            <a href="/login" className="inline-block p-2 hover:bg-blue-700 rounded">Login</a> */}
            <div className="inline-block p-2 hover:bg-blue-700 rounded">
                <Link to="/">Home</Link>
            </div>
            <div className="inline-block p-2 hover:bg-blue-700 rounded">
                <Link to="/cart">Cart</Link>
            </div>
            <div className="inline-block p-2 hover:bg-blue-700 rounded">
                <Link to="/login">Login</Link>
            </div>
            // Add more navigation links as needed
        </nav>
    </div>
</header>
    );
};

export default Header;
