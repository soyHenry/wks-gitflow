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
    title: 'Birth Year',
    dataIndex: 'birth_year',
    key: 'birth_year',
  },
  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'Films Count',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
    // render: (population: string) =>
    //   parseInt(population)
    //     ? parseInt(population).toLocaleString('es-AR')
    //     : population,
  },
  //   {
  //     title: 'Residents count',
  //     dataIndex: 'residents',
  //     key: 'residents_count',
  //     render: (residents: string[]) => residents.length,
  //   },
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
      <Table columns={columns} data={data.results} /* :D */ />
    </div>
  );
};

export default People;
