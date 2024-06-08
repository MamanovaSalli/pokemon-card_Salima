
import React from 'react';

const CardPage = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
};

export default CardPage;
