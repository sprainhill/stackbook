import React from 'react';

const StackBook = props => {
  let username
  if (props.userData) {
    username = props.userData.username.split(".")[0]
    console.log("username : ", username)
  }
  return (
    <div>
      Welcome to StackBook {props.userData ? username : ""}
    </div>
  );
};

export default StackBook;
