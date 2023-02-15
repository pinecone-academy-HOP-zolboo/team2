import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Post from "../src/Components/Post/post";
import App from "../src/App";
import { Blog } from "./Components/Blog/blog";
import Navbar from "./Components/Navbar/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Navbar />}>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<App />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Blog" element={<Blog />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
