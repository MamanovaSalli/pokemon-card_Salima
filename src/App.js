
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPage from "./cardPage/CardPage";
import './App.css';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const pokemonUrls = [];
            for (let i = 1; i <= 10; i++) {
                pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
            }

            const requests = pokemonUrls.map(url => axios.get(url));
            const responses = await Promise.all(requests);
            const data = responses.map(response => response.data);
            setData(data);
        };

        fetchPokemonData();
    }, []);

    return (
        <div className="app">
            <h1>Pokemon Cards</h1>
            <div className="pokemon-list">
                {data.map(pokemon => (
                    <CardPage key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default App;

