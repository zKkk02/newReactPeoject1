import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log("登录信息：", values);
        // 暂时模拟登录，直接跳转首页
        navigate("/");
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f0f2f5",
            }}
        >
            <Card title="商户后台登录" style={{ width: 350 }}>
                <Form name="login" onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[{ required: true, message: "请输入用户名" }]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[{ required: true, message: "请输入密码" }]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}