import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send as multipart/form-data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Healthcare Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} required />
        </label>
        <br />
        <label>
          Upload File:
          <input type="file" onChange={handleFileChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
