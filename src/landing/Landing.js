import React, { useState, useEffect } from 'react';
import { Connect } from "@blockstack/connect"
import { UserSession } from "blockstack"
import { appConfig } from "../assets/constants"
import { configure } from "radiks"
import SignIn from './SignIn'
import SignUp from './SignUp'
import { UserContextConsumer } from "../user-context"
import { User, getConfig } from 'radiks'

const userSession = new UserSession({ appConfig })

configure({
  apiServer: 'http://localhost:1260',
  userSession
})

const Landing = props => {
  const [userData, setUserData] = useState(null)

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
    const { userSession } = getConfig()
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        User.createWithCurrentUser()
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
