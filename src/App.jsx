import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ChangeLog from "./Pages/ChangeLog";
import Blogs from "./Pages/Blogs";
import Developers from "./Pages/Developers";
import Pricing from "./Pages/Pricing";
import Features from "./section/Features";
import Contact from "./Pages/Contact";
import Header from "./section/Header";
import BlogPost from "./Pages/BlogPost";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/changelog" element={<ChangeLog />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/developer" element={<Developers />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </div>
  );
};

export default App;
