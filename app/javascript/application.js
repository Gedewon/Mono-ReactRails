import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'
import LayoutDefault from './components/LayoutDefault';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux /configureStore';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <LayoutDefault>
                <App/>
            </LayoutDefault>
        </BrowserRouter>
    </Provider>
);

