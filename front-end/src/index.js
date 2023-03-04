import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Post from "./Components/Post/post";
import App from "./App";
import { Blog } from "./Components/Blog/blog";
import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/Login/login"
import Source from "./axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Source>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<App />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </Source>
  </BrowserRouter>
);
