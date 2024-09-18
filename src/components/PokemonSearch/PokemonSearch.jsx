/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const PokemonSearch = ({ filteredPokemon }) => {
  return (
    <div className="flex justify-center min-h-screen py-5">
      <form className="w-full max-w-lg">
        <input
          type="text"
          onChange={(e)=> filteredPokemon(e.target.value)}
          placeholder="Search Pokémon..."
          className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      </form>
    </div>
  );
};

export default PokemonSearch;
