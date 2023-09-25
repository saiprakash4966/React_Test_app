import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    // You can save the username in a state or context here if needed
    navigate('/form');
  };

  return (
    <div>
      <h1>Homepage</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HomePage;