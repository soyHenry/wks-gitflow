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
  },
  {
    title: 'films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
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
      <Table columns={columns} data={data.slice(0,data.length)} /* :D *//>
    </div>
  );  
};

export default People;

/**
 *      Agregar tabla con los personajes sacados de la API. Mostrar para
        cada persona: name, birth_year, height (en metros), cantidad de
        films. Codear en un componente aparte tal como {'<Planets>'}.
 */