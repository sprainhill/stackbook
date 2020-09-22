import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Landing from "./Landing"
import StackBook from './StackBook'
import './App.scss';
import "bulma"

function App() {
  const [userData, setUserData] = useState(null)
  console.log("App userData : ", userData)

  return (
    <>
    <Route exact path="/">

    </Route>
    {userData ? <Redirect to="/stackbook" /> : <Landing setUserData={setUserData} />}
    
    <Route path="/stackbook" component={StackBook} />
    </>

  );
}

export default App;
