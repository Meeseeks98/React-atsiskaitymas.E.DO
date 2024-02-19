import React from 'react';

const BookCard = ({ book, handleReservation }) => {
  const { id, title, author, category, price, cover, reserved } = book;

  return (
    <div className="book-card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> ${price}</p>
      {reserved ? (
        <button onClick={() => handleReservation(id, reserved)}>Return</button>
      ) : (
        <button onClick={() => handleReservation(id, reserved)}>Give to the reader</button>
      )}
    </div>
  );
}

export default BookCard;
