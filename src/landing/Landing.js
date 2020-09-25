import React, { useState, useEffect } from 'react';
import { Connect } from "@blockstack/connect"
import { UserSession } from "blockstack"
import { appConfig } from "../assets/constants"
import SignIn from './SignIn'
import SignUp from './SignUp'
import { UserContextConsumer } from "../user-context"

const userSession = new UserSession({ appConfig })

const Landing = props => {
  const [userData, setUserData] = useState(null)
  console.log("Landing userData")
  const authOptions = {
    redirectTo: '/',
    finished: ({ userSession }) => {
      setUserData(userSession.loadUserData())
    },
    appDetails: {
      name: 'rory\'s app',
      icon: 'https://example.com/icon.png',
    },
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        setUserData( userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData())
    }
  })


  useEffect(() => {
    props.setUserData(userData)

  }, [userData])
  
  return (
    <UserContextConsumer>
      {context => (
        <Connect authOptions={authOptions}>
          <div className="App">
            <section className="section">
              <div className="container app-cont">
                <SignUp />
                <SignIn />
              </div>
            </section>
              </div>
        </Connect>
      )}
    </UserContextConsumer>
    );
};

export default Landing;
