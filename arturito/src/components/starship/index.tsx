import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndexmo: 'name',
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
  },
];
const starShip = () => {
  return (
    <div>
      <Table columns={columns} data={data.results} /* :D */ />
      <h1>hola:()</h1>
    </div>
  );
};

export default starShip;
