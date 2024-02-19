import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FeedbackPage from './Pages/FeedbackPage';
import MainPage from './Pages/MainPage';
import RegistrationPage from './Pages/RegistrationPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import BookForm from './Components/BookForm';
import FeedbackForm from './Components/FeedbackForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/feedback" component={FeedbackPage} />
        <Route path="/bookform" component={BookForm} />
        <Route path="/feedbackform" component={FeedbackForm} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
