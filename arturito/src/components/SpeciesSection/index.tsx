import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'average_height',
    dataIndex: 'average_height',
    key: 'average_height',
    render: (average_height: string) =>
      parseInt(average_height)
        ? parseInt(average_height).toLocaleString('es-AR')
        : average_height,
  },
  {
    title: 'Average_lifespan',
    dataIndex: 'average_lifespan',
    key: 'average_lifespan',
    render: (films: string[]) => films.length,
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
      <Table columns={columns} data={data.results} /* :D */ />
    </div>
  );
};

export default Species;
