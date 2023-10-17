import React,{ useEffect, useState } from 'react'
// import axios from 'axios';
import './Show.css';

export const Show = () => {
    const [userProfiles, setUserProfiles] = useState([]);
    const [filteredDepartment, setFilteredDepartment] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
      fetch('http://127.0.0.1:8000/project/get_request/')
        .then(response => response.json())
        .then(data => setUserProfiles(data.user_profiles))
        .catch(error => console.error('Error:', error));
    }, []);


    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/project/get_request_job_titles/')
        .then(response => response.json())
        .then(data => setUserProfile(data.user_profiles))
        .catch(error => console.error('Error:', error));
    }, []);


    const handleFilterClick = (department) => {
      setFilteredDepartment(department);
    };
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };


    return (
      <body>
        <div className='main-content'>
          <div className='show_body'>
            <h1>Поиск</h1>
            <div className="search_container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input
            className='form'
              type="text"
              placeholder="Поиск по имени..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            </div>

        <div className="filter_buttons">
        <button
          className={filteredDepartment === null ? 'filter_btn active' : 'filter_btn'}
          onClick={() => handleFilterClick(null)}>
          All
        </button>
          {userProfile.map((profile, index) => (
            <button
              className={filteredDepartment === profile.department ? 'filter_btn active' : 'filter_btn'}
              key={index}
              onClick={() => handleFilterClick(profile.department)}
            >
              {profile.department}
            </button>
          ))}
        </div>
  
        <div className="user_profiles">
        {userProfiles
          .filter(profile => filteredDepartment === null || profile.department === filteredDepartment)
          .filter(profile => searchTerm === '' || `${profile.first_name} ${profile.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((profile, index) => (
            <a key={index} href="">
              <div className="info_container">
                <div className='left'>
                  <img className="img" src={profile.avatarUrl} alt={profile.first_name} />
                </div>
                <div className='right'>
                  <div className="name">
                    {profile.first_name} {profile.last_name} <span className="usertag">{profile.usertag}</span>
                  </div>
                  <div className="department">{profile.department}</div>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
        </div>
        
      </body>
      
  );
}