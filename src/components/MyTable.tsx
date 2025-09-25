import { Table, type TableProps } from "antd";

export default function MyTable<T>(props: TableProps<T>) {
    return (
        <Table
            {...props}
            style={{
                borderRadius: 12,
                overflow: "hidden",
                ...props.style,
            }}
        />
    );
}
