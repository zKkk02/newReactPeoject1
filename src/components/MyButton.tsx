import { Button, type ButtonProps } from "antd";

export default function MyButton({ children, ...rest }: ButtonProps) {
    return (
        <Button
            {...rest}
            style={{
                borderRadius: 6,
                height: 40,
                padding: "0 20px",
                ...rest.style,
            }}
        >
            {children}
        </Button>
    );
}
