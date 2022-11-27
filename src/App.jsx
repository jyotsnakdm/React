import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import DataTable from './DataTable';

function App() {
  const [users,setUsers]=useState('');
    useEffect(() => {
      axios
        .get('https://gorest.co.in/public/v2/users')
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    console.log("Result:", users);
  return (
    <div className="App">
      <h1>User Data</h1>
      {users.length > 0 ? <DataTable data={users}/> : null}
    </div>
  );
}

export default App;