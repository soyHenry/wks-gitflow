import React from 'react'
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
      title: 'Films Count',
      dataIndex: 'films',
      key: 'films',
      render: (films: string) => films.length
    },





    // {
    //   title: 'Population',
    //   dataIndex: 'population',
    //   key: 'population',
    //   render: (population: string) =>
    //     parseInt(population)
    //       ? parseInt(population).toLocaleString('es-AR')
    //       : population,
    // },
    // {
    //   title: 'Residents count',
    //   dataIndex: 'residents',
    //   key: 'residents_count',
    //   render: (residents: string[]) => residents.length,
    // },
  ];

  // https://www.swapi.it/api/starships

  function Starship() {
    const { data, error } = useSWR('/starships', swGet);

    console.log(data)

    if (error) {
      return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
      return <div className="px-2">Loading...</div>;
    }

    if(data.next){
      data.push()
    }


    return (
      <div>
        <Table columns={columns} data={data.results} /* :D */ />
      </div>
    )
}

export default Starship


        // <div className="p-3">
        //     <p className="font-bold text-xl"># TODO</p>
        //     <p>
        //       Agregar tabla con las starships sacadas de la API. Mostrar para
        //       cada starship: name, model, manufacturer, passengers, cantidad de
        //       films. Codear en un componente aparte tal como {'<Planets>'}.
        //     </p>
        //     <p>
        //       <a href="https://swapi.it/documentation#starships">
        //         https://swapi.it/documentation#starships
        //       </a>
        //     </p>
        //   </div>
