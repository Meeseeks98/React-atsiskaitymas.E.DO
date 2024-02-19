import React, { useState } from 'react';

const FeedbackForm = ({ name, onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Siunčiame atsiliepimo duomenis į onSubmit funkciją
    onSubmit({ name, feedback });
    // Išvalome atsiliepimo lauką po jo pateikimo
    setFeedback('');
  };

  return (
    <div>
      <h2>Leave Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input type="text" value={name} readOnly />
        <label>Feedback:</label>
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
