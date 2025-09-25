import {Card, type CardProps} from "antd";

export default function MyCard({children, ...rest}: CardProps) {
    return (
        <Card
            {...rest}
            style={{
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                backgroundColor: "#fff",
                padding: 24,
                ...rest.style,
            }}
        >
            {children}
        </Card>
    );
}
