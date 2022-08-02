import { Routes, Route } from "react-router-dom";
import ApiError from "./pages/api-error";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import User from "./pages/user";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="/user/:username/apiError" element={<ApiError />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound isRoute />} />
        </Routes>
    );
}

export default AppRoutes;