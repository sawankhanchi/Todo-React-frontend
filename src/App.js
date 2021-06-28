import React, { useEffect, useState } from 'react';
import './App.css';
// import List from './List.js';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState('');

  const url = 'http://127.0.0.1:8000/api/';

  useEffect(() => {

    getTodos();

  }, []);

  const getTodos = () => {
    axios.get(`${url}`)
    .then(res => {
      setTodos(res.data);
    })

    .catch(err => {console.log(err)});
  }

  console.log(todos);

  return (
    <div className="app">

      { todos && todos.map(item =>(
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
