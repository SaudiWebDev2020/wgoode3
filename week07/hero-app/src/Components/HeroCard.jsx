import React from 'react';

const HeroCard = props => {

  const {name, secret, level, skills} = props.hero;

  return (
    <div className="card mb-3">
    <div className="card-body">
      <h3>Name: {name}</h3>
      <h4>Secret Identity: {secret}</h4>
      <h4>Level: {level}</h4>
      <h4>Skills</h4>
      <ul>
        {skills.map((skill, i) => 
          <li key={i}>{skill}</li>
        )}
      </ul>
    </div>
  </div>
  );

}

export default HeroCard;