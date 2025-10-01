import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import ProductList from '@/pages/ProductList';
import ProductDetail from '@/pages/ProductDetail';
import Loading from './components/Loading';
import Home from '@/pages/Home';

function App() {
    return (
        <>
            <HashRouter>
                <Loading />

                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/products"
                        element={<ProductList />}
                    />
                    <Route
                        path="/products/:slug"
                        element={<ProductDetail />}
                    />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
