import React from 'react';
import './App.css'
// Importing Components
import Form from './componentsOne/Form'
import TodoList from './componentsOne/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Erik's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
