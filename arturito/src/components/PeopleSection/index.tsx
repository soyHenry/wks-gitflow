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
    title: 'height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'hair_color',
    dataIndex: 'hair_color',
    key: 'hair_color',
  },
  {
    title: 'birth_year',
    dataIndex: 'birth_year',
    key: 'birth_year',
  },
  {
    title: 'films',
    dataIndex: "films",
    render: (films: string[]) => films.length,
    key: 'films',
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
      <Table columns={columns} data={data.results.slice(0, (data.results.length + 1)
)} /* :D */ />
    </div>
  );
};

export default People;
