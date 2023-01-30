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
        key: 'manufacturer'
    },
    {
        title: 'Passengers',
        dataIndex: 'passengers',
        key: 'passengers'
    },
    {
        title: 'Nb of films',
        dataIndex: 'films',
        key: 'films',
        render: (films: string[]) => films ? films.length : 0,
    }
    // {
    //     title: 'Population',
    //     dataIndex: 'population',
    //     key: 'population',
    //     render: (population: string) =>
    //         parseInt(population)
    //             ? parseInt(population).toLocaleString('es-AR')
    //             : population,
    // },
    // {
    //     title: 'Residents count',
    //     dataIndex: 'residents',
    //     key: 'residents_count',
    //     render: (residents: string[]) => residents.length,
    // },
];

const Starships = () => {
    const { data, error } = useSWR('/starships', swGet);

    if (error) {
        return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
        return <div className="px-2">Loading...</div>;
    }

    // console.log('starships data: ', data);
    return (
        <div>
            <Table columns={columns} data={data.results} /* :D */ />
        </div>
    );
};

export default Starships;
