import MainLayout from "../layouts/MainLayout";
import MyCard from "../components/MyCard";
import MyButton from "../components/MyButton";
import MyTable from "../components/MyTable";
import {useLoading} from "../context/LoadingContext";
import {useEffect, useState} from "react";


//声明人员类型

export default function Users() {

    const columns = [
        {title: "姓名", width: '30%', align: 'center', dataIndex: "name", key: "name"},
        {title: "角色", dataIndex: "role", align: 'center', key: "role"},
        {
            title: "操作",
            key: "action",
            render: (e: object) => <MyButton danger onClick={delUser(e)}>删除</MyButton>,
        },
    ];

    const {showLoading, hideLoading} = useLoading();
    const [userList, setUserList] = useState([
        {id: 1, name: "张三", role: "管理员"},
    ]);

    const addUser = () => {
        const id = new Date().getTime()
        setUserList([
            ...userList,
            {id, name: `用户${id}`, role: "操作员"},
        ]);
    };

    const delUser = (e: object) => {
        return () => {
            setUserList(userList.filter((item: object) => item !== e));
        };
    };

    useEffect(() => {
        showLoading("正在加载人员数据...");
        const timer = setTimeout(() => {
            hideLoading();
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <MainLayout>
            <MyCard title="用户管理">
                <MyButton type="primary" onClick={addUser} style={{marginBottom: 16}}>添加用户</MyButton>
                <MyTable scroll={{scrollToFirstRowOnChange: true, y: '600px'}} dataSource={userList} columns={columns}
                         rowKey="id"/>
            </MyCard>
        </MainLayout>
    );
}
