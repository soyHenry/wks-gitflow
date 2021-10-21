import React from 'react';
import useSWR from 'swr';

import { swGetTwo } from '../../utils/fetcher';
import Table from '../Table/index';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'passengers',
      dataIndex: 'passengers',
      key: 'passengers',
    },
    {
        title: 'films',
        dataIndex: 'films',
        key: 'films'
    }
  ];


const StarShips = () => {
    const { data } = useSWR('/starships', swGetTwo);

    if(!data){
        return <div className="px-2">Loading...</div>;
    }
    return ( 
        <div>
             <Table columns={columns} data={data.results.map(e =>  {
        return {
                   name: e.name,
                   passengers: e.passengers,
                   model: e.model,
                   manufacturer: e.manufacturer,
                   films: e.films.length
               }
    })}/> 
        </div>
     );
}
 
export default StarShips;