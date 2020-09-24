import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Landing from "./landing/Landing"
import StackBook from './stackbook/StackBook'
import './App.scss';
import "bulma"

function App() {
  const [userData, setUserData] = useState(null)
  console.log("App userData : ", userData)

  return (
    <>
    <Route exact path="/">
    {!userData ? <Landing setUserData={setUserData} /> : <Redirect to="/stackbook" />}
    </Route>

    <Route path="/stackbook">
    {userData ? <Route path="/stackbook" render={props => <StackBook userData={userData} {...props} />} /> : <Redirect to="/" />}

    </Route>
    {/* <Route path="/" render={props => <StackBook userData={userData} {...props} />} /> */}

    

    </>

  );
}

export default App;
