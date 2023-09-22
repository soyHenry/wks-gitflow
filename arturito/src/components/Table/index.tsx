import { Table } from 'antd';
import 'antd/dist/antd.dark.css';
// HOLAHOAL
interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

const CustomTable = ({ columns, data }: { columns: Column[]; data: any[] }) => (
  <Table columns={columns} dataSource={data} />
);

export default CustomTable;
