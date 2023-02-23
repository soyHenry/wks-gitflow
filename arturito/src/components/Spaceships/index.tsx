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
    title: 'length',
    dataIndex: 'length',
    key: 'length',
  },
  {
    title: 'passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    render: (population: string) =>
      parseInt(population)
        ? parseInt(population).toLocaleString('es-AR')
        : population,
  }
];

const Planets = () => {
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

export default Planets;