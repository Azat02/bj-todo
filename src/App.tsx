import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Login, Todo } from './pages';

function App() {
  console.log( process.env.API_BASE_URL);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
