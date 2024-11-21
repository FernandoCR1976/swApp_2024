import React, { useEffect, useState} from "react";
import axios from 'axios';

function StarshipsList(){
    const [starships, setStarships] = useState([]);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/starships/').then((response)=>{
            setStarships(response.data.results);
        });
    },[]);

    return (
        <div className="starship-list">
            {starships.map((starship,index)=>(
                <div key={index} className="card">
                    <img src={`/images/starchips/${index}.jpg`} alt={starship.name} />
                    <h3>{starship.name}</h3>
                    <p>Modelo: {starship.model}</p>
                    <p>Longitud: {starship.lenght} m</p>

                </div>
            ))}
        </div>
    );

}

export default StarshipsList;