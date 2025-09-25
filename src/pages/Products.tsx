import MainLayout from "../layouts/MainLayout";
import MyCard from "../components/MyCard";
import MyButton from "../components/MyButton";
import MyTable from "../components/MyTable";

const data = [
    { id: "1", name: "商品A", price: 100, stock: 50 },
    { id: "2", name: "商品B", price: 200, stock: 20 },
];

const columns = [
    { title: "商品名称", dataIndex: "name", key: "name" },
    { title: "价格", dataIndex: "price", key: "price" },
    { title: "库存", dataIndex: "stock", key: "stock" },
    {
        title: "操作",
        key: "action",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (_: any, record: any) => (
            <>
                <MyButton type="link">编辑</MyButton>
                <MyButton type="link" danger>删除</MyButton>
            </>
        ),
    },
];

export default function Products() {
    return (
        <MainLayout>
            <MyCard title="商品管理">
                <MyButton type="primary" style={{ marginBottom: 16 }}>添加商品</MyButton>
                <MyTable dataSource={data} columns={columns} rowKey="id" />
            </MyCard>
        </MainLayout>
    );
}
