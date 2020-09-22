import React from 'react';
import { Connect } from "@blockstack/connect"
import SignIn from './SignIn'
import './App.scss';
import "bulma"

function App() {
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
    <Connect authOptions={authOptions}>
      <div className="App">
        <section className="section">
          <div className="container app-cont">

            <div className='sign-up'>
              Sign Up
            </div>

            <SignIn />

          {/* <div className='alrdy'>
            already have a username?
          </div> */}

        </div>
        </section>
      </div>

    </Connect>


  );
}

export default App;
