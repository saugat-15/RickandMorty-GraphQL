import React from 'react';
import { useCharacters } from '../containers/useCharacters';
import "../Characters.css";

export default function Characters() {
  const { loading, error, data } = useCharacters();  
  if (loading) return (
    <div>Spinner...</div>
  )

  if (error) return (
    <div>Something went wrong</div>
  )

  return <div className="Characters">
    {data.characters.results.map(character => {
      return (<div>
        <img src={character.image} />
        <h2>{character.name}</h2>
      </div>)
    })}
  </div>
}
