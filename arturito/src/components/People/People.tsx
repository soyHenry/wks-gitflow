import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';
import Table from '../Table';



//name, birth_year, height (en metros), cantidad de
//films

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
      title: 'Amount of films',
      dataIndex: 'films',
      key: 'films',
    },
];

const Starships = () => {

    const { data, error } = useSWR('/people', swGet);
  
    if (error) {
      return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
      return <div className="px-2">Loading..</div>;
    }
  
    return (
      <div>
        <Table columns={columns} data={data.results} /* :D */ />
      </div>
    );
};

export default Starships;