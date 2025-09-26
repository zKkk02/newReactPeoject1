import MainLayout from "../layouts/MainLayout";
import MyCard from "../components/MyCard";
import MyButton from "../components/MyButton";
import MyTable from "../components/MyTable";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";
const data = [
    { id: "1", name: "张三", role: "管理员" },
    { id: "2", name: "李四", role: "操作员" },
];

const columns = [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "角色", dataIndex: "role", key: "role" },
    {
        title: "操作",
        key: "action",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (_: any, record: any) => <MyButton danger>删除</MyButton>,
    },
];

export default function Users() {

    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        showLoading("正在加载人员数据...");
        const timer = setTimeout(() => {
            hideLoading();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <MainLayout>
            <MyCard title="用户管理">
                <MyButton type="primary" style={{ marginBottom: 16 }}>添加用户</MyButton>
                <MyTable dataSource={data} columns={columns} rowKey="id" />
            </MyCard>
        </MainLayout>
    );
}
