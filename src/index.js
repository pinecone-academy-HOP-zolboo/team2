import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Post from '../src/Components/Post/post';
import App from '../src/App';
import { Blog } from './Components/Blog/blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/user/Post" element={<Post />} />
        <Route path="/" element={<App />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
);
