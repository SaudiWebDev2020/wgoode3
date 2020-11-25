import React, { useState } from 'react';



const HeroForm = props => {

  const [name, setName] = useState("");
  const [secret, setSecret] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [skills, setSkills] = useState("");
  const [errors, setErrors] = useState({}); 

  const beAHero = e => {
    e.preventDefault();
    const hero = {name, secret, level, skills: skills.split(",")};
    props.setHero(hero);
    setName("");
    setSecret("");
    setLevel("Beginner");
    setSkills("");
  }

  const nameErrors = e => {
    let value = e.target.value;
    let message = "";
    if(!value) {
      message = "Name is required!"
    } else if(value.length < 3) {
      message = "Name must be 3 characters or longer!"
    }
    setErrors({...errors, name: message});
  }

  const secretErrors = e => {
    let value = e.target.value;
    let message = "";
    if(!value) {
      message = "Secrect Identity is required!"
    } else if(value.length < 5) {
      message = "Secrect Identity must be 5 characters or longer!"
    }
    setErrors({...errors, secret: message});
  }

  return (
    <form onSubmit={beAHero}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" onChange={e => setName(e.target.value)} onBlur={nameErrors} value={name} />
        <p className="text-danger">{errors.name}</p>
      </div>
      <div className="form-group">
        <label>Secret identity:</label>
        <input type="password" className="form-control" onChange={e => setSecret(e.target.value)} value={secret} onBlur={secretErrors} />
        <p className="text-danger">{errors.secret}</p>
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
      {
        name.length >= 2 && secret.length >= 5 ? 
        <input type="submit" value="Register Hero" className="btn btn-primary btn-block" /> :
        <input type="submit" value="Register Hero" className="btn btn-primary btn-block" disabled />
      }
    </form>
  );

}

export default HeroForm;