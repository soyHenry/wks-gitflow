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
      title: 'birth_year',
      dataIndex: 'birth_year',
      key: 'birth_year',
    },
    {
      title: 'height',
      dataIndex: 'height',
      key: 'height',
      render: (height: string) =>
        parseInt(height)
          ? parseInt(height).toLocaleString('es-AR')
          : height,
    },{
        title: 'skin_color',
        dataIndex: 'skin_color',
        key: 'skin_color',
      }

    /*{
      title: 'Residents count',
      dataIndex: 'residents',
      key: 'residents_count',
      render: (residents: string[]) => residents.length,
    }, */
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