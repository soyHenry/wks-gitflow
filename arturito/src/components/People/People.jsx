import React from 'react';

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
    render: (height) => height / 100,
  },

  {
    title: 'films',
    dataIndex: 'films',
    key: 'films',
    render: (films) => films.length,
  },
];

export default function People() {
  /* const peoples = fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then((res) => res);

  console.log(people); */
  const { data, error } = useSWR('/people', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }

  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} />
    </div>
  );
}
