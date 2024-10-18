
import axios from 'axios';
import UserCard from './UserCard';
import React, { useEffect, useState } from 'react';

function Home({message}) {
    // 1) all data comming from api is stored in the users state
    // 2) Loading is storing the true or false values if data is there then it flase means 
    //    not showing Loading... on screen else its true it will show Loding... on screen.
    // 3) UserCard Component is designed for Sinngle User Cards.
    // 4) And Here we are managing all cards flexing and all.

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [selectedUser, setSelectedUser] = useState('');
    // const [error, setError] = useState('');

    useEffect(() => {
     
        axios.get('http://localhost:5000/users')
            .then(response => { 
                setUsers(response.data);
                setLoading(false);
            })
            .catch(() => alert('error occuring during fetching the users'));
    }, []);

    console.log(`this is from other child2.js ${message}`);

    //Fetch a single user by ID
    // const fetchUserById = async (message) => {
    //     try {
    //         const response = axios.get(`http://localhost:5000/users/${message}`);
    //         setSelectedUser(response.data[0]);//assuming one user is return
    //     } catch (error) {
    //         console.warn('error fetching user');
    //     }
    // }
   

    if (loading) return <h2>Loading...</h2>;

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {users.map(user => (
                    <UserCard key={user.id}  user={user} />
                ))}
            </div>
            ;
            
        </div>
    )
}

export default Home;