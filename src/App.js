import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import Navigation from './Components/Navigation/Navigation';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Navigation></Navigation>
        <Auth></Auth>
      </UserContext.Provider>
    </div>
  );
}

export default App;
