import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SigninLogin from "./Shared/SigninLogin";
import HelpCenter from "./Shared/HelpCenter";
import Details from "./components/Deatails/Details";
import Galary from "./components/Deatails/Galary";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" exact element={<Details/>} />
        <Route path="/about" exact element={<About />} />
        <Route path="/signinLogin" exact element={<SigninLogin />} />
        <Route path="/helpCenter" exact element={<HelpCenter />} />
        <Route path="/galary" exact element={<Galary/>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
