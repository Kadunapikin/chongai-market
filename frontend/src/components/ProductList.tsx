import React from 'react';
import ProductItem from './ProductItem';

// Assume this is the product type
type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
};

// Example products data
const products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: 150, description: 'This is product 2' },
    // Add more products as needed
];

const ProductList: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-xl font-bold my-4">Products</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;