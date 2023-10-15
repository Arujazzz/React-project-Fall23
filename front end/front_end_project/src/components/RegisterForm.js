import React, { useState } from 'react';
import axios from 'axios';


const RegisterForm = ({ toggleRegisterForm }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword:'',
    AvatarUrl:'',
    usertag:'td',
    department:'IOS',
    birthday:'',
    phone:'',
  });

  const [showRegisterForm, setShowRegisterForm] = useState(false); // Новое состояние для отображения RegisterForm
      
      

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      axios.post('http://127.0.0.1:8000/project/register/', formData)
      .then(response => {
        console.log(response.data);
        setShowRegisterForm(true);
        toggleRegisterForm();
      })
      .catch(error => {
        console.error(error);
      });

      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword:'',
        AvatarUrl:'',
        usertag:'td',
        department:'IOS',
        birthday:'',
        phone:''

      })
    } 
    else {
      alert('Пароли не совпадают');
    }

   
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
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
      <div>
        <label htmlFor="confirmPassword">confirmPassword:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>  
      <div>
        <label htmlFor="AvatarUrl">avatarUrl:</label>
        <input
          type="file"
          id="AvatarUrl"
          name="AvatarUrl"
          value={formData.avatarUrl}
          onChange={handleChange}
          required
        />
      </div> 
      <div>
      <label htmlFor="usertag">usertag:</label>
      <select
        id="usertag"
        name="usertag"
        value={formData.usertag}
        onChange={handleChange}
        required
      >
        <option value="td">td</option>
        <option value="ms">ms</option>
        <option value="jb">jb</option>
        <option value="bj">bj</option>
        <option value="dg">dg</option>
        <option value="dm">dm</option>
        <option value="string">string</option>
        <option value="jm">jm</option>
        <option value="Tech Lead">Tech Lead</option>
        <option value="ct">ct</option>
      </select>
    </div>
      <div>
        <label htmlFor="department">Department:</label>
        <select
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
        <option value="IOS">IOS</option>
        <option value="Android">Android</option>
        <option value="Manager">Manager</option>
        <option value="Analyst">Analyst</option>
        <option value="Designer">Designer</option>
        
      </select>




      </div> 
      <div>
        <label htmlFor="birthday">birthday:</label>
        <input
          type="data"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          required
        />
      </div> 
      <div>
        <label htmlFor="phone">phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div> 
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegisterForm;