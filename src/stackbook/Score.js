import React, { useState } from 'react';

const Score = () => {
  const [clicks, setClicks] = useState(0)
  console.log("clicks : ", clicks)

  const handleClicks = () => {
    let tempClicks = clicks + 1
    setClicks(tempClicks)
  }

  const saveClicks = () => {
    console.log("saveClicks")
  }


  return (
    <div className="score-cols columns">

      <div className="score-col column">
        <div className="click-btn" onClick={handleClicks}>click me</div>
        <div className="save-btn" onClick={saveClicks}>save clicks</div>
        <div className="score">clicks : {clicks}</div>
      </div>

    </div>
  );
};

export default Score;
