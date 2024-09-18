/* eslint-disable react/prop-types */
const PokemonCard = ({ name, image, types, id }) => {
  const typeColors = {
    grass: 'bg-green-500',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    bug: 'bg-lime-500',
    normal: 'bg-gray-400',
    electric: 'bg-yellow-400',
    ground: 'bg-yellow-700',
    poison: 'bg-purple-500',
    fairy: 'bg-pink-400',
    psychic: 'bg-pink-500',
    fighting: 'bg-red-700',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    ice: 'bg-blue-300',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    flying: 'bg-indigo-400',
  }

  const bgColor = typeColors[types[0].type.name] || 'bg-gray-400'

  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + '  ' + types[1].type.name
    }
    return types[0].type.name
  }

  return (
    <div className='max-w-xs mx-auto rounded-xl shadow-lg p-4 text-gray-800 bg-slate-500'>
      <div className="flex justify-center">
        <img src={image} alt={name} className="w-32 h-32 object-cover" />
      </div>
      <div className="mt-4 text-center capitalize">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{id}</p>
        <div className={`flex justify-center space-x-2 mt-2 ${bgColor}`}>
          {typeHandler()}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

