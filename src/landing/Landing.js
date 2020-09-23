import React from 'react';
import { Connect } from "@blockstack/connect"
import SignIn from './SignIn'
import SignUp from './SignUp'
import { UserContextConsumer } from "../user-context"

const Landing = props => {
  console.log("Landing props : ", props)
  const authOptions = {
    redirectTo: '/',
    finished: ({ userSession }) => {
      props.setUserData(userSession.loadUserData())
    },
    appDetails: {
      name: 'rory\'s app',
      icon: 'https://example.com/icon.png',
    },
  };
  
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
