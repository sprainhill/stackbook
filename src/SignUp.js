import React from 'react';
import { useConnect } from '@blockstack/connect'
import { UserContextConsumer } from "./user-context"

const SignUp = props => {
  // console.log("SignUp props : ", props)
  const { doOpenAuth } = useConnect()

  return (
    <UserContextConsumer>
      {context => (
        <div onClick={() => doOpenAuth()} className="sign-up">
          Sign Up
        </div>
      )}
    </UserContextConsumer>
  );
};

export default SignUp;
