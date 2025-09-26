import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import {ConfigProvider} from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "antd/dist/reset.css"; // AntD 版本 >=5
import {App} from "antd";
// import {BrowserRouter} from "react-router-dom";
import {LoadingProvider} from "./context/LoadingContext";
import "./index.css";


const theme = {
    token: {
        colorPrimary: "#5C7AEA",   // 主色
        colorBgBase: "#F7F7F7",     // 全局背景
        borderRadius: 8,            // 全局圆角
        colorText: "#333",          // 主文字颜色
    },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <LoadingProvider>
            <ConfigProvider locale={zhCN} theme={theme}>
                <App>
                    <Router/>
                </App>
            </ConfigProvider>
        </LoadingProvider>
    </React.StrictMode>
);