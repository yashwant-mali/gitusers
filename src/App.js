import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => alert('error occuring during fetching the users'));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )

}




export default App;
