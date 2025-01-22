import React, { useState } from 'react';

const PokemonInfo = ({ pokemonName,pokemon, key }) => {
  const { id, name, height, abilities = [], moves = [], cries = {} } = pokemon;

  // State to control the visibility of the moves section
  const [showMoves, setShowMoves] = useState(false);

  // Toggle visibility of the moves section
  const toggleMovesVisibility = () => {
    setShowMoves(prevState => !prevState);
  };

  return (
    <div key={key} className="mt-5 shadow-black border border-black p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
      <div className='text-2xl font-bold capitalize flex justify-center'>{pokemonName}</div>
      <div className="mt-4 flex justify-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="h-32 w-32 object-contain"
        />
      </div>
      <div className="mt-6 space-y-4">
        <p><strong>Pokémon ID:</strong> #{id}</p>
        <p><strong>Height:</strong> {height / 10} meters</p>
        <p><strong>Base Experience:</strong> {pokemon.base_experience} XP</p>

        {/* Abilities section */}
        <div>
          <strong>Abilities:</strong>
          <ul className="list-disc pl-5">
            {abilities && abilities.length > 0 ? (
              abilities.map((ability, index) => (
                <li key={index}>
                  {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}{' '}
                  {ability.is_hidden ? '(Hidden)' : ''}
                </li>
              ))
            ) : (
              <li>No abilities available</li>
            )}
          </ul>
        </div>

        {/* Toggleable Moves section */}
        <div>
          <strong>Moves:</strong>
          <button
            onClick={toggleMovesVisibility}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          >
            {showMoves ? 'Hide Moves' : 'Show Moves'}
          </button>
          {showMoves && (
            <ul className="list-disc pl-5 mt-2">
              {moves && moves.length > 0 ? (
                moves.map((move, index) => (
                  <li key={index}>
                    {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
                  </li>
                ))
              ) : (
                <li>No moves available</li>
              )}
            </ul>
          )}
        </div>

        {/* Cries section */}
        <div className="mt-4">
          <strong>Cries:</strong>
          <div className="space-x-4">
            {cries.latest && (
              <button
                onClick={() => new Audio(cries.latest).play()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Latest Cry
              </button>
            )}
            {cries.legacy && (
              <button
                onClick={() => new Audio(cries.legacy).play()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Legacy Cry
              </button>
            )}
            {(!cries.latest && !cries.legacy) && <p>No cry data available</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
