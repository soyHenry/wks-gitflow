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
    title: 'model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    render: (passengers: string) =>
      parseInt(passengers)
        ? parseInt(passengers).toLocaleString('es-AR')
        : passengers,
  },
  /*{
    title: 'Residents count',
    dataIndex: 'residents',
    key: 'residents_count',
    render: (residents: string[]) => residents.length,
  }, */
];

const StarShips = () => {
  const { data, error } = useSWR('/starships', swGet);

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

export default StarShips;