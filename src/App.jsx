import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import PlacesRoute from "./pages/PlacesRoute";
import SigninLogin from "./Shared/SigninLogin";
import HelpCenter from "./Shared/HelpCenter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/blogs" exact element={<Blog />} />
        <Route path="/blogs/:id" exact element={<BlogDetails />} />
        <Route path="/places" exact element={<PlacesRoute />} />
        <Route path="/signinLogin" exact element={<SigninLogin />} />
        <Route path="/helpCenter" exact element={<HelpCenter />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;