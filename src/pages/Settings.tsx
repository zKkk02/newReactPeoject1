import MainLayout from "../layouts/MainLayout";
import MyCard from "../components/MyCard";
import MyButton from "../components/MyButton";
import { Form, Input } from "antd";

export default function Settings() {
    const onFinish = (values: never) => {
        console.log("保存配置：", values);
    };

    return (
        <MainLayout>
            <MyCard title="系统设置">
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="系统名称" name="systemName">
                        <Input placeholder="请输入系统名称" />
                    </Form.Item>
                    <Form.Item label="管理员邮箱" name="adminEmail">
                        <Input placeholder="请输入管理员邮箱" />
                    </Form.Item>
                    <MyButton type="primary" htmlType="submit">保存</MyButton>
                </Form>
            </MyCard>
        </MainLayout>
    );
}
