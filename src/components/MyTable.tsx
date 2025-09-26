import {Table, type TableProps} from "antd";

export default function MyTable<T>(props: TableProps<T>) {
    return (
        <div>
            <Table
                {...props}
                style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    ...props.style,
                }}
            />
            {/*<Pagination defaultCurrent={1} total={props.dataSource?.length}/>*/}
        </div>
    );
}
