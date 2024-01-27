import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <ProductList />
            </main>
        </div>
    );
};

export default App;
