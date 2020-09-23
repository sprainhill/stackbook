import React from 'react';
import { useConnect } from '@blockstack/connect'
import { UserContextConsumer } from "../user-context"

const SignUp = () => {
  const { doOpenAuth } = useConnect()

  return (
        <div onClick={() => doOpenAuth()} className="sign-up">
          Sign Up
        </div>
  );
};

export default SignUp;
