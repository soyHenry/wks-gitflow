import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
    {
      title: 'name',
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
    },
    {
      title: 'films',
      dataIndex: 'films',
      key: 'films',
    },
  ];


const People = () => {
    const { data, error } = useSWR('/people/?search=#people', swGet);

    
  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }


  return (
    <div>
        <h1>prueba 2.1</h1>
        <Table columns={columns} data={data.results}/>
    </div>
  )
}

export default People