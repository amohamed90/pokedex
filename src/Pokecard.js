import React from 'react';
import './Pokecard.css'


function Pokecard({ name, type, id, baseExperience }) {
  const pokeUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{ name }</h4>
      <img className="Pokecard-img"src={ `${pokeUrl}/${id}.png` } alt="pokeImg" />
      <small className="Pokecard-desc">Type: { type }</small>
      <small className="Pokecard-desc">EXP: { baseExperience }</small>
    </div>
  );
}

export default Pokecard;