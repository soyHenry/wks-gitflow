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
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
  },
  {
    title: 'Film Count',
    dataIndex: 'films',
    key: 'film_count',
    render: (films: string[]) => films.length,
  },
];

const Vehicles = () => {
  const { data, error } = useSWR('/vehicles', swGet);

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

export default Vehicles;
