import React, { useState } from 'react';



const HeroForm = props => {

  const [name, setName] = useState("");
  const [secret, setSecret] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [skills, setSkills] = useState("");

  const beAHero = e => {
    e.preventDefault();
    const hero = {name, secret, level, skills: skills.split(",")};
    props.setHero(hero);
    setName("");
    setSecret("");
    setLevel("Beginner");
    setSkills("");
  }

  return (
    <form onSubmit={beAHero}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
      </div>
      <div className="form-group">
        <label>Secret identity:</label>
        <input type="password" className="form-control" onChange={e => setSecret(e.target.value)} value={secret} />
      </div>
      <div className="form-group">
        <label>Level:</label>
        <select className="form-control" onChange={e => setLevel(e.target.value)} value={level}> 
          <option>Beginner</option>
          <option>Run of the mill</option>
          <option>Senior</option>
          <option>Champion</option>
        </select>
      </div>
      <div className="form-group">
        <label>Skills:</label>
        <textarea className="form-control" onChange={e => setSkills(e.target.value)} value={skills}></textarea>
      </div>
      <input type="submit" value="Register Hero" className="btn btn-primary btn-block" />
    </form>
  );

}

export default HeroForm;