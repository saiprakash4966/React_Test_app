import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    name: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // You can save the form data and navigate to the Result Page here
    navigate('/result');
  };

  const handleCancel = () => {
    // You can handle cancel and navigate back to the Homepage here
    navigate('/');
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br/>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default FormPage;