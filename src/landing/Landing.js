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
      // set to local state
      setUserData(userSession.loadUserData())
      // then pass up
    },
    appDetails: {
      name: 'rory\'s app',
      icon: 'https://example.com/icon.png',
    },
  };

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
