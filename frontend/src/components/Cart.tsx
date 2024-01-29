import React from 'react';

// Dummy cart items data
const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', price: 150, quantity: 1 },
    // Add more items as needed
];

const Cart: React.FC = () => {
    // Calculate total cost
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                        <span>{item.name}</span>
                        <span>x{item.quantity}</span>
                        <span>${item.price}</span>
                    </div>
                ))}
            </div>
            <div className="text-right font-bold mt-4">
                Total: ${totalCost}
            </div>
        </div>
    );
};

export default Cart;
