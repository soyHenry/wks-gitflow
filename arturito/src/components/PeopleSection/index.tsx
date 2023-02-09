import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';
// height (en metros),
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'birth_year',
    dataIndex: 'birth_year',
    key: 'birth_year',
  },
  {
    title: 'height',
    dataIndex: 'height',
    key: 'height',
    render: (height: string) =>
      parseInt(height)
        ? parseInt(height).toLocaleString('es-AR')
        : height,
  },
  {
    title: 'films',
    dataIndex: 'films',
    key: 'residents_count',
    render: (films: string[]) => films.length,
  },
];

const People = () => {
  const { data, error } = useSWR('/people', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results.slice(0, data.results.length + 1)} /* :D */ />
    </div>
  );
};

export default People;
