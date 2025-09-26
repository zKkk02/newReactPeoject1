import {Card, Form, Input, Button} from "antd";
import {useNavigate} from "react-router-dom";
// import styled from 'styled-components';


// const StyledWrapper = styled.div`
//     /*
//     More comprehensive version at shenanigans.shoghisimon.ca/collection/css
//      */
//
//     .container {
//         position: absolute;
//         inset: 0;
//     }
//
//     .container::before {
//         content: "";
//         position: absolute;
//         inset: -145%;
//         rotate: -45deg;
//         background: #000000;
//         background-image: radial-gradient(
//                 4px 100px at 0px 235px,
//                 rgb(255, 140, 17),
//                 #0000
//         ),
//         radial-gradient(4px 100px at 300px 235px, rgb(255, 119, 0), #884e2800),
//         radial-gradient(
//                 1.5px 1.5px at 150px 117.5px,
//                 rgb(255, 144, 9) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 252px, rgb(156, 14, 137), #0000),
//         radial-gradient(4px 100px at 300px 252px, rgb(23, 41, 206), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 126px,
//                 rgb(247, 102, 18) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 150px, rgb(249, 121, 16), #0000),
//         radial-gradient(4px 100px at 300px 150px, rgb(255, 128, 18), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 75px,
//                 rgb(255, 116, 10) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 253px, rgb(249, 137, 17), #0000),
//         radial-gradient(4px 100px at 300px 253px, rgb(248, 107, 14), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 126.5px,
//                 rgb(252, 129, 14) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 204px, rgb(234, 115, 18), #0000),
//         radial-gradient(4px 100px at 300px 204px, rgb(255, 139, 6), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 102px,
//                 rgb(255, 128, 9) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 134px, rgb(249, 133, 9), #0000),
//         radial-gradient(4px 100px at 300px 134px, rgb(251, 125, 15), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 67px,
//                 rgb(255, 146, 13) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 179px, rgb(249, 137, 17), #0000),
//         radial-gradient(4px 100px at 300px 179px, rgb(253, 122, 6), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 89.5px,
//                 rgb(234, 132, 7) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 299px, rgb(255, 115, 0), #0000),
//         radial-gradient(4px 100px at 300px 299px, rgb(255, 136, 0), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 149.5px,
//                 rgb(255, 123, 0) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 215px, rgb(255, 145, 0), #0000),
//         radial-gradient(4px 100px at 300px 215px, rgb(255, 132, 0), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 107.5px,
//                 rgb(255, 136, 0) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 281px, rgb(255, 170, 0), #0000),
//         radial-gradient(4px 100px at 300px 281px, rgb(255, 115, 0), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 140.5px,
//                 rgb(255, 119, 0) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 158px, rgb(255, 123, 0), #0000),
//         radial-gradient(4px 100px at 300px 158px, rgb(255, 132, 0), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 79px,
//                 rgb(255, 149, 0) 100%,
//                 #0000 150%
//         ),
//         radial-gradient(4px 100px at 0px 210px, rgb(255, 123, 0), #0000),
//         radial-gradient(4px 100px at 300px 210px, rgb(255, 162, 0), #0000),
//         radial-gradient(
//                 1.5px 1.5px at 150px 105px,
//                 rgb(255, 136, 0) 100%,
//                 #0000 150%
//         );
//         background-size: 300px 235px,
//         300px 235px,
//         300px 235px,
//         300px 252px,
//         300px 252px,
//         300px 252px,
//         300px 150px,
//         300px 150px,
//         300px 150px,
//         300px 253px,
//         300px 253px,
//         300px 253px,
//         300px 204px,
//         300px 204px,
//         300px 204px,
//         300px 134px,
//         300px 134px,
//         300px 134px,
//         300px 179px,
//         300px 179px,
//         300px 179px,
//         300px 299px,
//         300px 299px,
//         300px 299px,
//         300px 215px,
//         300px 215px,
//         300px 215px,
//         300px 281px,
//         300px 281px,
//         300px 281px,
//         300px 158px,
//         300px 158px,
//         300px 158px,
//         300px 210px,
//         300px 210px,
//         300px 210px;
//         animation: hi 150s linear infinite;
//     }
//
//     @keyframes hi {
//         0% {
//             background-position: 0px 220px,
//             3px 220px,
//             151.5px 337.5px,
//             25px 24px,
//             28px 24px,
//             176.5px 150px,
//             50px 16px,
//             53px 16px,
//             201.5px 91px,
//             75px 224px,
//             78px 224px,
//             226.5px 350.5px,
//             100px 19px,
//             103px 19px,
//             251.5px 121px,
//             125px 120px,
//             128px 120px,
//             276.5px 187px,
//             150px 31px,
//             153px 31px,
//             301.5px 120.5px,
//             175px 235px,
//             178px 235px,
//             326.5px 384.5px,
//             200px 121px,
//             203px 121px,
//             351.5px 228.5px,
//             225px 224px,
//             228px 224px,
//             376.5px 364.5px,
//             250px 26px,
//             253px 26px,
//             401.5px 105px,
//             275px 75px,
//             278px 75px,
//             426.5px 180px;
//         }
//         to {
//             background-position: 0px 6800px,
//             3px 6800px,
//             151.5px 6917.5px,
//             25px 13632px,
//             28px 13632px,
//             176.5px 13758px,
//             50px 5416px,
//             53px 5416px,
//             201.5px 5491px,
//             75px 17175px,
//             78px 17175px,
//             226.5px 17301.5px,
//             100px 5119px,
//             103px 5119px,
//             251.5px 5221px,
//             125px 8428px,
//             128px 8428px,
//             276.5px 8495px,
//             150px 9876px,
//             153px 9876px,
//             301.5px 9965.5px,
//             175px 13391px,
//             178px 13391px,
//             326.5px 13540.5px,
//             200px 14741px,
//             203px 14741px,
//             351.5px 14848.5px,
//             225px 18770px,
//             228px 18770px,
//             376.5px 18910.5px,
//             250px 5082px,
//             253px 5082px,
//             401.5px 5161px,
//             275px 6375px,
//             278px 6375px,
//             426.5px 6480px;
//         }
//     }`;

export default function Login() {
    const navigate = useNavigate();

    const onFinish = (values: object) => {
        console.log("登录信息：", values);
        // 暂时模拟登录，直接跳转首页
        navigate("/");
    };

    return (
        // <StyledWrapper>
        <div
            className="container"
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f0f2f5",
            }}
        >
            <Card title="商户后台登录" style={{width: 350}}>
                <Form name="login" onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[{required: true, message: "请输入用户名"}]}
                    >
                        <Input placeholder="请输入用户名"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[{required: true, message: "请输入密码"}]}
                    >
                        <Input.Password placeholder="请输入密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
        // </StyledWrapper>
    );
}