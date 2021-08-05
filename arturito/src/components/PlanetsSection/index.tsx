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
    title: 'Climate',
    dataIndex: 'climate',
    key: 'climate',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    render: (population: string) =>
      parseInt(population)
        ? parseInt(population).toLocaleString('es-AR')
        : population,
  },
  {
    title: 'Residents count',
    dataIndex: 'residents',
    key: 'residents_count',
    render: (residents: string[]) => residents.length,
  },
];

const Planets = () => {
  const { data, error } = useSWR('/planets', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results.slice(0, 3)} /* :D */ />

      <a
        className="inline-block font-mono text-md text-white font-bold px-4 py-2 bg-yellow-600 rounded-lg"
        href="https://swapi.it/documentation#planets"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
    </div>
  );
};

export default Planets;
