import React from 'react';

const Header: React.FC = () => {
    return (
<header className="bg-blue-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My E-Commerce Site</h1>
        <nav>
            <a href="/" className="inline-block p-2 hover:bg-blue-700 rounded">Home</a>
            <a href="/cart" className="inline-block p-2 hover:bg-blue-700 rounded">Cart</a>
            <a href="/login" className="inline-block p-2 hover:bg-blue-700 rounded">Login</a>
            // Add more navigation links as needed
        </nav>
    </div>
</header>
    );
};

export default Header;
