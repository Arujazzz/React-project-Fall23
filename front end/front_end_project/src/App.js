import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Show } from './components/Show';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/main" element={<Main />} />
      <Route path='/' element={<Show/>}/>
      
    </Routes>
  </Router>
  );
}

export default App;