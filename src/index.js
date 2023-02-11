import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Post from "../src/Components/Post/post";
import Navbar from "./Components/Navbar/navbar";
// import Footer from "./Components/Footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<App />} />
          {/* <Route path="/user/Post" element={<Post />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
