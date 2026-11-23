import React, { useState, useEffect } from "react";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=10",
            );
            const data = await response.json();
            setPokemon(data.results);
        };
        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemon.map((p) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
