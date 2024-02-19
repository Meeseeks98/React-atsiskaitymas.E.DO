import React, { useState } from 'react';
import axios from 'axios';
import BookForm from '../Components/BookForm';
import '../App.css'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', formData)
      .then(response => {
        console.log('Book registered successfully:', response.data);
        // Redirect to main page after successful registration
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Error registering book:', error);
      });
  };

  return (
    <div className="Reg-container"> 
      <h1>Book registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label className="label" htmlFor="title">Title:</label> 
          <input className="input" type="text" name="title" id="title" value={formData.title} onChange={handleChange} required /> 
        </div>
        <div className="form-group">
          <label className="label" htmlFor="author">Author:</label>
          <input className="input" type="text" name="author" id="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="category">Category:</label>
          <input className="input" type="text" name="category" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="price">Price:</label>
          <input className="input" type="number" name="price" id="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="cover">Cover:</label>
          <input className="input" type="text" name="cover" id="cover" value={formData.cover} onChange={handleChange} required />
        </div>
        <button className="button" type="submit">Register Book</button> {/* Apply button class */}
      </form>
    </div>
  );
}

export default RegistrationPage;
