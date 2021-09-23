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
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  /* 
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
  }, */
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
      <Table columns={columns} data={data.results.slice(0, 3)} /* :D */ />
    </div>
  );
};

export default Species


/* https://www.swapi.it/api/species/ */