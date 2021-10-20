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
    title: 'Climate',
    dataIndex: 'climate',
    key: 'climate',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    render: (population: string) =>
      parseInt(population)
        ? parseInt(population).toLocaleString('es-AR')
        : population,
  },
  {
    title: 'Residents count',
    dataIndex: 'residents',
    key: 'residents_count',
    render: (residents: string[]) => residents.length,
  },
];

const Planets = () => {
  const { data, error } = useSWR('/planets', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }
  
  const handeNext=()=>{
    data.next?swGet(data.next):console.log('nothig next')
  }

  const handlePrev=()=>{
    data.prev?swGet(data.prev):console.log('dont have prev')
  }

  return (
    <div>
      <Table columns={columns} data={data.results} /* :D */ />
      <div>
        <button onClick={handlePrev}>{' <- '}</button>
        <button onClick={handeNext}>{' -> '}</button>
      </div>
    </div>
  );
};

export default Planets;
