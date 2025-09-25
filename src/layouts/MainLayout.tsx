import { Layout, Menu, Dropdown, Avatar } from "antd";
import { Link, useLocation,useNavigate  } from "react-router-dom";
import {
    UserOutlined,
    DashboardOutlined,
    TeamOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";

const { Header, Sider, Content } = Layout;

// 左侧菜单配置
const menuItems: MenuProps["items"] = [
    {
        key: "/",
        icon: <DashboardOutlined />,
        label: <Link to="/">首页</Link>,
    },
    {
        key: "/users",
        icon: <TeamOutlined />,
        label: <Link to="/users">用户管理</Link>,
    },
    {
        key: "/products",
        icon: <ShoppingOutlined />,
        label: <Link to="/products">商品管理</Link>,
    },
    {
        key: "/orders",
        icon: <ShoppingCartOutlined />,
        label: <Link to="/orders">订单管理</Link>,
    },
    {
        key: "/settings",
        icon: <SettingOutlined />,
        label: <Link to="/settings">设置</Link>,
    },
];

// 用户菜单
const userMenu: MenuProps = {
    items: [
        { key: "profile", label: "个人信息" },
        { key: "logout", label: "退出登录" },
    ],
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const navigate = useNavigate();

    // 匹配当前选中的菜单项
    const selectedKey =
        menuItems?.find((item) =>
            location.pathname.startsWith(item?.key as string)
        )?.key || "/";

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* 左侧菜单 */}
            <Sider width={220}>
                <div
                    style={{
                        height: 64,
                        margin: 16,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#fff",
                        background: "rgba(255,255,255,0.15)",
                    }}
                >
                    商户后台
                </div>
                {/*<Menu*/}
                {/*    theme="dark"*/}
                {/*    mode="inline"*/}
                {/*    selectedKeys={[selectedKey as string]}*/}
                {/*    items={menuItems}*/}
                {/*    style={{ height: "100%" }}*/}
                {/*/>*/}
                <Menu
                    theme="dark"
                    mode="inline"
                    items={menuItems}
                    selectedKeys={[location.pathname]} // 🚀 关键点
                    onClick={(e) => navigate(e.key)}   // 点击菜单跳转
                />
            </Sider>

            {/* 右侧内容 */}
            <Layout style={{ flex: 1 }}>
                <Header
                    style={{
                        background: "#fff",
                        padding: "0 24px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Dropdown menu={userMenu} placement="bottomRight">
                        <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
                    </Dropdown>
                </Header>

                <Content
                    style={{
                        margin: 24,
                        padding: 24,
                        background: "#fff",
                        borderRadius: 12,
                        minHeight: "calc(100vh - 112px)",
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
