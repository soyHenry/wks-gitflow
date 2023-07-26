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
    title: 'Height (meters)',
    dataIndex: 'height',
    key: 'height',
    render: (height) => (height ? `${parseInt(height) / 100} m` : 'N/A'),
  },
  {
    title: 'Films',
    dataIndex: 'films',
    key: 'films_count',
    render: (films) => (films ? films.length : 0),
  },
];

const People = () => {
  const { data, error } = useSWR('/people', swGet);

  if (error) {
    return <div className="px-2">Error</div>;
  }
  if (!data) {
    return <div className="px-2">Wait...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} />
    </div>
  );
};

export default People;
