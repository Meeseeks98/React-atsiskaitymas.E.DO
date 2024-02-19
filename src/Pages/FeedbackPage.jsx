import React, { useState } from 'react';
import FeedbackForm from '../Components/FeedbackForm';
import '../App.css'

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    text: ''
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
    console.log('Feedback submitted:', formData);
    
    setFormData({
      name: '',
      title: '',
      text: ''
    });
  };

  return (
    <div className="container"> 
      <FeedbackForm/>
      <h1>Book Feedback </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group"> 
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group"> 
          <label>Text:</label>
          <textarea name="text" value={formData.text} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Feedback</button> 
      </form>
    </div>
  );
}

export default FeedbackPage;
