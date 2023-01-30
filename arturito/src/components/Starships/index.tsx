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
    title: 'Cost',
    dataIndex: 'cost_in_credits',
    key: 'cost',
  }
  ,
  {
    title: 'Speed',
    dataIndex: 'max_atmosphering_speed',
    key: 'speed',
  }
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
      <Table columns={columns} data={data.results/*.slice(0, 3)*/} /* :D */ />
    </div>
  );
};

export default Starships;
