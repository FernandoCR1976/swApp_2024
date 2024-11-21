import React, { useEffect, useState} from "react";
import axios from 'axios';

function CharacterList(){
    const [charaters, setCharacters] = useState([]);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/').then((response)=>{
            setCharacters(response.data.results);
        });
    },[]);

    return (
        <div className="character-list">
            {charaters.map((character,index)=>(
                <div key={index} className="card">
                    <img src={`/images/characters/${index}.jpg`} alt={character.name} />
                    <h3>{character.name}</h3>
                    <p>Altura: {character.height}</p>
                    <p>Peso: {character.mass}</p>

                </div>
            ))}
        </div>
    );

}

export default CharacterList;