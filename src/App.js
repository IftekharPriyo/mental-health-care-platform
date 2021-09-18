/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import VideoChat from './Components/VideoChat/VideoChat';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Navigation></Navigation>
        <Router>
          <Route path="/" exact component={VideoChat}/>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

