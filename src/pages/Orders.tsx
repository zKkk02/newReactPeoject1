import MainLayout from "../layouts/MainLayout";
import MyCard from "../components/MyCard";
import MyTable from "../components/MyTable";
import { Tag } from "antd";

const data = [
    { id: "1", orderNo: "ORD001", customer: "张三", status: "待发货" },
    { id: "2", orderNo: "ORD002", customer: "李四", status: "已完成" },
];

const columns = [
    { title: "订单号", dataIndex: "orderNo", key: "orderNo" },
    { title: "客户", dataIndex: "customer", key: "customer" },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
        render: (text: string) => {
            let color = "blue";
            if (text === "已完成") color = "green";
            else if (text === "已取消") color = "red";
            return <Tag color={color}>{text}</Tag>;
        },
    },
];

export default function Orders() {
    return (
        <MainLayout>
            <MyCard title="订单管理">
                <MyTable dataSource={data} columns={columns} rowKey="id" />
            </MyCard>
        </MainLayout>
    );
}
