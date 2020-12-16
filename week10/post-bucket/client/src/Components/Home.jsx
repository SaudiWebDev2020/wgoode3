import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Home = props => {

  const [users, setUsers] = useState([]);

  useState(() => {
    console.log(props.user)
    if(props.user) {
      axios.get("http://localhost:8000/api/users", {
        withCredentials: true
      }).then(res => {
        console.log(res);
        setUsers(res.data);
      }).catch(err => console.error(err));
    } else {
      navigate("/");
    }
  }, [])

  return (
    <div>
      {JSON.stringify(users)}
    </div>
  )
}

export default Home