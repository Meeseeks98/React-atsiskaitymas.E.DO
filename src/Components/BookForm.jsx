import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [cover, setCover] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Patikriname ar visi laukai užpildyti
    if (!title || !author || !category || !price || !cover) {
      alert('Visi laukai privalo būti užpildyti!');
      return;
    }
    // Siunčiame naujos knygos duomenis į addBook funkciją
    addBook({ title, author, category, price, cover });
    // Išvalome formos laukus po knygos pridėjimo
    setTitle('');
    setAuthor('');
    setCategory('');
    setPrice('');
    setCover('');
  };

  return (
    <div>
      <h2>Book Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label>Cover URL:</label>
        <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
