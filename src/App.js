import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
 import Home from './Home';
import Contact from './Contact';
import Profile from './Profile';
import { useState } from 'react';

//1) Links comming from Header Component (its just front end part)
//2) Here we are connecting those links to components
//3) Home is having all users data

function App() {
  const [message, setMessage] = useState('');

  const handleSendMessage = (newMessage) => {
    setMessage(newMessage);
  }


  return (

    console.log(`this is form app.js ${message}`),

    <div>

      <Router>
        <Header onSendMessage={handleSendMessage} />
        <Routes>
          <Route path="/" element={<Home message={message}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;
