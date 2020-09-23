import React from 'react';
import "./StackStyles.scss"

const StackHeader = props => {
  let username
  if (props.userData) {
    username = props.userData.username.split(".")[0]
    console.log("username : ", username)
  }
  return (
    <div className="columns stack-header-cols">
      <div className="column">
        Welcome to StackBook {props.userData ? username : ""}
      </div>
    </div>
  );
};

export default StackHeader;
