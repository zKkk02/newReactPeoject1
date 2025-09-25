import { Layout, Menu, Dropdown, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const menuItems = [
    { key: "/", label: "首页", path: "/" },
    { key: "/users", label: "用户管理", path: "/users" },
    { key: "/products", label: "商品管理", path: "/products" },
    { key: "/orders", label: "订单管理", path: "/orders" },
    { key: "/settings", label: "设置", path: "/settings" },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    const userMenu = (
        <Menu>
            <Menu.Item key="profile">个人信息</Menu.Item>
            <Menu.Item key="logout">退出登录</Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key}>
                            <Link to={item.path}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: "#fff", padding: "0 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                    <Dropdown overlay={userMenu}>
                        <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
                    </Dropdown>
                </Header>
                <Content style={{
                    margin: 24,
                    padding: 24,
                    background: "#fff", // 卡片白色背景
                    borderRadius: 12,   // 圆角
                    minHeight: 360
                }}>{children}</Content>
            </Layout>
        </Layout>
    );
}