import useSWR from 'swr';
import { parseConfigFileTextToJson } from 'typescript';
import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'Average Lifespan',
    dataIndex: 'average_lifespan',
    key: 'average_lifespan',
    render: (average: string) =>
      parseInt(average) ? average + ' years' : average,
  },
];

const Species = () => {
  const { data, error } = useSWR('/species', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} />
    </div>
  );
};

export default Species;
