import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import '../App.css'


const MainPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleReservation = (id, reserved) => {
    axios.put(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`, { reserved: !reserved })
      .then(response => { 
        setBooks(prevBooks => prevBooks.map(book => {
          if (book.id === id) {
            return { ...book, reserved: !reserved };
          }
          return book;
        }));
      })
      .catch(error => {
        console.error('Error updating reservation:', error);
      });
  };

  return (
    <div className="Main-container">
      <h1>Main Page</h1>
      <div className="book-list"> 
        {books.map(book => (
          <div key={book.id} className="book-card"> 
            <h2 className="book-title">{book.title}</h2> 
            <p className="book-author">Author: {book.author}</p> 
            <p className="book-description">{book.description}</p> 
            <button className="reserve-btn" onClick={() => handleReservation(book.id, book.reserved)}>
              {book.reserved ? 'Cancel Reservation' : 'Reserve'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
