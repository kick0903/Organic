import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar.js';
import Products from './pages/Products';
import About from './pages/about';
import Login from './pages/login';
import Gallery from './pages/gallery';
import ProductDetail from './pages/ProcductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="gallery" element={<Gallery />}></Route>
                <Route path="productdetail" element={<ProductDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("home"));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

reportWebVitals();
