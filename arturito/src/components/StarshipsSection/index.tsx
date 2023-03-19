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
        render: (passengers: string) =>
        parseInt(passengers)
          ? parseInt(passengers).toLocaleString('es-AR')
          : passengers,
      },
    {
      title: 'Films',
      dataIndex: 'films',
      key: 'films',
      render: (films: string[]) => films.length,
    },
  ];

  
const Starships = (props) => {
    const { data, error } = useSWR('/starships', swGet);
    if (error) {
        return <div className="px-2">Oh oh!</div>;
      }
      if (!data) {
        return <div className="px-2">Loading...</div>;
      }
    return (
        <Table columns={columns} data={data.results} /* :D */ />
    )
}

export default Starships;