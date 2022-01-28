import React from 'react';
import { useCharacters } from '../containers/useCharacters';
import "../Characters.css";
import { Link } from 'react-router-dom';

export default function Characters() {
  const { loading, error, data } = useCharacters();  
  if (loading) return (
    <div>Spinner...</div>
  )

  if (error) return (
    <div>Something went wrong</div>
  ) 
  
return <div className="Characters">
    {data.characters.results.map((character) => {
      return (<Link to={`/${character.id}`}>
        <img src={character.image} />
        <h2>{character.name}</h2>
      </Link>)
    })}
  </div>
}
