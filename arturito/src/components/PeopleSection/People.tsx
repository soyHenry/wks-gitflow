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
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Species',
    dataIndex: 'species',
    key: 'species',
    render: (species: [string]) =>
      [...species],
  },
  {
    title: 'Home World',
    dataIndex: 'homeworld',
    key: 'homeworld',
  },
];

const People = () => {
  const { data, error } = useSWR('/people', swGet);

  console.log(error)
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
