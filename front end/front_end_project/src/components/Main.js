import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../App.css';




 const Main = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const toggleLoginForm = () => {
        setShowLoginForm(prevState => !prevState); // Инвертируем состояние
        setShowRegisterForm(false);
    };
    const toggleRegisterForm = () => {
        setShowRegisterForm(prevState => !prevState);
        setShowLoginForm(false);
    }
  return (
    <div >
      <div className='main_container' >
      {showLoginForm && <LoginForm toggleLoginForm={toggleLoginForm} />} 
      <button className='button-34' onClick={toggleLoginForm}>
        Login
      </button>
      {showRegisterForm && <RegisterForm toggleRegisterForm={toggleRegisterForm} />} 
      <button className='button-34' onClick={toggleRegisterForm}>
        Register
      </button>
      </div>
       
      <div className='header_container'>EmployeeGallery</div>
    
    </div>
    
  )
}
export default Main;
