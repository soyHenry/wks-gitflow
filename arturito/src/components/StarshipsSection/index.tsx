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
    render: (manufacturer: string) =>
      parseInt(manufacturer)
        ? parseInt(manufacturer).toLocaleString('es-AR')
        : manufacturer
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    render: (passengers: string[]) => passengers.length,
  },
  {
    title: 'Films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
  },
];

const Starships = () => {
  const { data, error } = useSWR('/starships', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results.slice(0, 10)} />
    </div>
  );
};

export default Starships;