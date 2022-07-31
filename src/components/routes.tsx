import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import User from "../pages/user";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;