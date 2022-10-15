import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import PackagePage from "./page/PackagePage";
import HomePage from "./page/HomePage";
import ContactUsPage from "./page/ContactUsPage";
import AboutUsPage from "./page/AboutUsPage";
import GalleriesPage from "./page/GalleriesPage";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/packages" element={<PackagePage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/galleries" element={<GalleriesPage />} />
            </Routes>
        </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
