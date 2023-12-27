import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comment from "./Comment";

const root = ReactDOM.createRoot(document.getElementById('root'));
const middle = ReactDOM.createRoot(document.getElementById('middle'));
root.render(
    <App />
);

middle.render(
    <Comment/>
);
