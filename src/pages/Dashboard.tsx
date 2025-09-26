import MainLayout from "../layouts/MainLayout";
import {Row, Col, Statistic, Card} from "antd";
import {ShopOutlined, ShoppingCartOutlined, UserOutlined, RiseOutlined, LineChartOutlined} from "@ant-design/icons";
import MyCard from "../components/MyCard";
import {Column, Pie, Line} from "@ant-design/plots";
import {useLoading} from "../context/LoadingContext";
import {useEffect} from "react";

export default function Dashboard() {
    const {showLoading, hideLoading} = useLoading();

    useEffect(() => {
        showLoading("正在加载仪表盘数据...");
        const timer = setTimeout(() => {
            hideLoading();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    // 模拟柱状图数据（销售额趋势）
    const salesData = [
        {month: "1月", value: 320},
        {month: "2月", value: 452},
        {month: "3月", value: 601},
        {month: "4月", value: 734},
        {month: "5月", value: 820},
        {month: "6月", value: 920},
    ];

    const columnConfig = {
        data: salesData,
        xField: "month",
        yField: "value",
        columnWidthRatio: 0.6,
        label: {
            style: {fill: "#FFFFFF"},
        },
        xAxis: {label: {autoRotate: true}},
        color: "#1677ff",
    };

    // 模拟饼图数据（商户占比）
    const shopData = [
        {type: "A类商户", value: 40},
        {type: "B类商户", value: 21},
        {type: "C类商户", value: 17},
        {type: "D类商户", value: 22},
    ];

    const pieConfig = {
        appendPadding: 10,
        data: shopData,
        angleField: "value",
        colorField: "type",
        radius: 0.9,
        label: {
            text: (datum: any) => `${datum.type}: ${(datum.value / 100).toFixed(2)}%`,
        },
        interactions: [{type: "element-active"}],
    };

    // 模拟饼图数据（商户占比）
    const shopData2 = [
        {type: "日用品", value: 40},
        {type: "零食", value: 21},
        {type: "服装", value: 17},
        {type: "电器", value: 22},
    ];

    const pieConfig2 = {
        appendPadding: 10,
        data: shopData2,
        angleField: "value",
        colorField: "type",
        radius: 0.9,
        label: {
            text: (datum: any) => `${datum.type}: ${(datum.value / 100).toFixed(2)}%`,
        },
        interactions: [{type: "element-active"}],
    };

    // 模拟折线图数据（近7天订单量）
    const orderData = [
        {day: "周一", orders: 80},
        {day: "周二", orders: 92},
        {day: "周三", orders: 76},
        {day: "周四", orders: 110},
        {day: "周五", orders: 95},
        {day: "周六", orders: 130},
        {day: "周日", orders: 105},
    ];

    const lineConfig = {
        data: orderData,
        xField: "day",
        yField: "orders",
        smooth: true, // 平滑曲线
        point: {
            size: 5,
            shape: "circle",
        },
        color: "#fa8c16",
    };

    return (
        <MainLayout>
            {/*顶部统计卡片*/}
            <Row gutter={[24, 24]}>
                <Col span={8}>
                    <MyCard>
                        <Statistic
                            title="用户总数"
                            value={1280}
                            prefix={<UserOutlined style={{color: "#1677ff"}}/>}
                        />
                    </MyCard>
                </Col>
                <Col span={8}>
                    <MyCard>
                        <Statistic
                            title="商品总数"
                            value={512}
                            prefix={<ShopOutlined style={{color: "#52c41a"}}/>}
                        />
                    </MyCard>
                </Col>
                <Col span={8}>
                    <MyCard>
                        <Statistic
                            title="今日订单"
                            value={64}
                            prefix={<ShoppingCartOutlined style={{color: "#fa8c16"}}/>}
                        />
                    </MyCard>
                </Col>
            </Row>

            {/* 图表区域 */}
            <Row gutter={[24, 24]} style={{marginTop: 24}}>
                <Col span={16}>
                    <Card title={<><RiseOutlined/> 销售趋势</>} variant="borderless">
                        <Column {...columnConfig} />
                    </Card>

                </Col>

                <Col span={8}>
                    <Card title={<><ShopOutlined/> 商户分布</>} variant="borderless">
                        <Pie {...pieConfig} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{marginTop: 24}}>
                <Col span={16}>
                    <Card title={<><LineChartOutlined/> 近7天订单量</>} variant="borderless">
                        <Line {...lineConfig} />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title={<><ShopOutlined/> 销售种类分布</>} variant="borderless">
                        <Pie {...pieConfig2} />
                    </Card>
                </Col>
            </Row>

        </MainLayout>
    );
}
