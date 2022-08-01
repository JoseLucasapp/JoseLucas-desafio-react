import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import User from "./pages/user";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound isRoute />} />
        </Routes>
    );
}

export default AppRoutes;