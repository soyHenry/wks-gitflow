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

  const DocumentationButton = () => (
    <a
      href="https://www.swapi.it/documentation#planets"
      target="_blank"
      rel="noreferrer"
      className="mb-2"
    >
      <div className="inline-block m-2 px-4 py-2 bg-pink-500 rounded-lg font-semibold text-md shadow-md text-white">
        Docs
      </div>
    </a>
  );

  return (
    <div>
      <DocumentationButton />
      <Table columns={columns} data={data.results.slice(0, 3)} /* :D */ />
    </div>
  );
};

export default Planets;
