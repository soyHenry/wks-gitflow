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
    title: 'Passenger',
    dataIndex: 'passengers',
    key: 'passengers',
    render: (passengers: string) =>
      parseInt(passengers)
        ? parseInt(passengers).toLocaleString('es-AR')
        : passengers,
  },
  {
    title: '# of Films',
    dataIndex: '# of Films',
    key: '# of Films',
    render: (films: string[]) => films?.length,
  },
  {
    title: "Manufacturer",
    dataIndex: "manufacturer",
    key: "manufacturer",
  }
];

const Spaceships = () => {
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

export default Spaceships;