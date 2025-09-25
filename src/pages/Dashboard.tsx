import MainLayout from "../layouts/MainLayout";
import { Row, Col, Statistic } from "antd";
import MyCard from "../components/MyCard";

export default function Dashboard() {
    return (
        <MainLayout>
            <Row gutter={[24, 24]}>
                <Col span={8}>
                    <MyCard>
                        <Statistic title="用户总数" value={1280} />
                    </MyCard>
                </Col>
                <Col span={8}>
                    <MyCard>
                        <Statistic title="商品总数" value={512} />
                    </MyCard>
                </Col>
                <Col span={8}>
                    <MyCard>
                        <Statistic title="今日订单" value={64} />
                    </MyCard>
                </Col>
            </Row>
        </MainLayout>
    );
}
