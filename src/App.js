import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import CharacterList from "./components/CharacterList";
import PlanetList from "./components/PlanetsList";
import StarshipsList from "./components/StarshipsList";

function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/characters">Personajes</Link>
            </li>
            <li>
              <Link to="/planets">Palnetas</Link>
            </li>
            <li>
              <Link to="/starships">Naves</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<CharacterList/>}/>
          <Route path="/planets" element={<PlanetList/>}/>
          <Route path="/starships" element={<StarshipsList/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;