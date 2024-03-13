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
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
  },
  {
    title: 'Films',
    dataIndex: 'films',
    key: 'films',
    render: (films) => films.length,
  },
];

const Spaceships = () => {
  const { data: spaceships, error } = useSWR('/starships', swGet);

  if (error) {
    return <div className="px-2">Error fetching data</div>;
  }

  if (!spaceships) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-xl">Spaceships</h1>
      <Table columns={columns} data={spaceships} />
    </div>
  );
};

export default Spaceships;
