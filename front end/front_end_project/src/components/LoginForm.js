import React, { useState } from 'react';
import axios from 'axios';
import './Loginform.css';



const LoginForm = ({ toggleLoginForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',    
      });

      const [showRegisterForm, setShowRegisterForm] = useState(false);
      
      
    
      const handleChange =  (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
        
      const handleLogin = (e) => {
        e.preventDefault();

          axios.post('http://127.0.0.1:8000/project/login/', formData)
          .then(response => {
            console.log(response.data);
            if (response.data.user_exists) {
                setShowRegisterForm(true);
                toggleLoginForm();
              } else {
                alert('Неправильный email или пароль');
              }
          })
          .catch(error => {
            console.error(error);
          });
    
       
      };

  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form class="loginform" onSubmit={handleLogin}>
      <h3>Login Here</h3>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </div>
  
  );
};

export default LoginForm;

