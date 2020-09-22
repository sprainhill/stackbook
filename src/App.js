import React, { useState } from 'react';
import { Connect } from "@blockstack/connect"
import { Route } from 'react-router-dom'
import Landing from "./Landing"
import StackBook from './StackBook'
import './App.scss';
import "bulma"

function App() {
  const [userData, setUserData] = useState(null)

  const authOptions = {
    redirectTo: '/',
    finished: ({ userSession }) => {
      console.log(userSession.loadUserData());
    },
    appDetails: {
      name: 'rory\'s app',
      icon: 'https://example.com/icon.png',
    },
  };


  return (
    <Route path="/" component={Landing} />
 

  );
}

export default App;
