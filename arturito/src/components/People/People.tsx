import axios from "axios";
import { useEffect, useState } from "react";


const People = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`).then(res => {
            setData(res.data.results);
        });
    }, []);

    return (
        <>
            <div>
                {
                    data?.map((per) => (
                        <div >
                            <h2>Name: {per.name}</h2>
                            <h3>Birth year: {per.birth_year}</h3>
                            <h3>Height: {per.height}</h3>
                            <h3>Films: {per.films?.length}</h3>
                        </div>

                    ))
                }
            </div>
        
        </>
    )
};

export default People;