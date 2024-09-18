import { useEffect, useState } from 'react'
import axios from 'axios'

import PokemonCard from './components/PokemonCard/PokemonCard'
import PokemonSearch from './components/PokemonSearch/PokemonSearch'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [filterPokemon, setFilterPokemon] = useState('')

  const filteredPokemon = (searchTerm) => {
    setFilterPokemon(searchTerm)
  }

  const getPokemons = async () => {
    const endPoints = []
    try {
      for (var i = 1; i < 51; i++){
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      await axios.all(endPoints.map((enpoint) => 
        axios.get(enpoint)))
        .then((res) => setPokemons(res))
        
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPokemons()
  }, [])

  return (
    <main className='w-sreem h-screem text-white'>
      <nav className='max-h-20'>
        <PokemonSearch  filteredPokemon={filteredPokemon}/>
      </nav>
      <div className="p-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pokemons.filter((pokemon) => pokemon.data.name.includes(filterPokemon)).map((pokemon, key) => ( 
          <div key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.other['official-artwork'].front_default} types={pokemon.data.types} id={pokemon.data.id}/>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
