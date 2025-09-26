import React, { createContext, useContext, useState } from "react";
import { Spin } from "antd";

interface LoadingContextType {
    showLoading: (message?: string) => void;
    hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading 必须在 LoadingProvider 内使用");
    }
    return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string>("加载中...");

    const showLoading = (msg?: string) => {
        setMessage(msg || "加载中...");
        setLoading(true);
    };

    const hideLoading = () => {
        setLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ showLoading, hideLoading }}>
            {children}
            {loading && (<Spin fullscreen size="large" tip={message} />)}
        </LoadingContext.Provider>
    );
};
