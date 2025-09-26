import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import "antd/dist/reset.css"; // AntD 版本 >=5

export default function Router() {
    const isLoggedIn = true; // 暂时模拟登录状态

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/users" element={isLoggedIn ? <Users /> : <Navigate to="/login" />} />
                <Route path="/products" element={isLoggedIn ? <Products /> : <Navigate to="/login" />} />
                <Route path="/orders" element={isLoggedIn ? <Orders /> : <Navigate to="/login" />} />
                <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}
