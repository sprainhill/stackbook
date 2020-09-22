import React, { useState } from 'react';
import { Connect } from "@blockstack/connect"
import { Route } from 'react-router-dom'
import Landing from "./Landing"
import StackBook from './StackBook'
import { UserContext } from "./user-context"
import './App.scss';
import "bulma"

function App() {
  const [userData, setUserData] = useState(null)
  console.log("App userData : ", userData)

  return (
      <Route path="/" render={props => <Landing setUserData={setUserData} {...props} />} />
  );
}

export default App;
