import React from 'react';

type ProductProps = {
    product: {
        id: number;
        name: string;
        price: number;
        description: string;
    };
};

const ProductItem: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="border p-4 rounded">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
        </div>
    );
};

export default ProductItem;
