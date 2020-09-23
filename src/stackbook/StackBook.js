import React from 'react';
import StackHeader from "./StackHeader"
import StackCard from "./StackCard"

const StackBook = props => {
  return (
    <div>
      <StackHeader userData={props.userData} />
      <StackCard />
    </div>
  );
};

export default StackBook;
