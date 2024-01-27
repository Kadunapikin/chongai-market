import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1>My E-Commerce Site</h1>
                <nav>
                    <a href="/" className="inline-block p-2">Home</a>
                    <a href="/cart" className="inline-block p-2">Cart</a>
                    // Add more navigation links as needed
                </nav>
            </div>
        </header>
    );
};

export default Header;
