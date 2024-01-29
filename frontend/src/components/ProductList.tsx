import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
};

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://example.com/products') // Use your actual API URL
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

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
