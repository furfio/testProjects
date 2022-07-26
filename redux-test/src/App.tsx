import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Post } from './features/post/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Post />
      </header>
    </div>
  );
}

export default App;
