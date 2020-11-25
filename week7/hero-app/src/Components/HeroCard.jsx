import React from 'react';

const HeroCard = props => {
  return (
    <div className="card">
    <div className="card-body">
      <h3>Name: {props.hero.name}</h3>
      <h4>Secret Identity: {props.hero.secret}</h4>
      <h4>Level: {props.hero.level}</h4>
      <h4>Skills</h4>
      <ul>
        {props.hero.skills.map((skill, i) => 
          <li key={i}>{skill}</li>
        )}
      </ul>
    </div>
  </div>
  );

}

export default HeroCard;