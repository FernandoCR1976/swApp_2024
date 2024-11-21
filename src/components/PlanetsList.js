import React, { useEffect, useState} from "react";
import axios from 'axios';

function PlanetList(){
    const [planets, setPlanets] = useState([]);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/').then((response)=>{
            setPlanets(response.data.results);
        });
    },[]);

    return (
        <div className="planet-list">
            {planets.map((planet,index)=>(
                <div key={index} className="card">
                    <img src={`/images/planets/${index}.jpg`} alt={planet.name} />
                    <h3>{planet.name}</h3>
                    <p>Clima: {planet.climate}</p>
                    <p>Diámetro: {planet.diameter} km</p>

                </div>
            ))}
        </div>
    );

}

export default PlanetList;