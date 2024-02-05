// src/main.tsx or src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const container = document.getElementById('root');
// Check if 'container' is not null to satisfy TypeScript's strict null checks
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}
