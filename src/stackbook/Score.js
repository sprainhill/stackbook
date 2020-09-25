import React, { useState, useEffect } from 'react';
import { saveClicks } from "../assets/data-store"
import { CLICKS_FILENAME } from "../assets/constants"
import { UserSession } from "blockstack"
import { appConfig } from "../assets/constants"
import { fireEvent } from '@testing-library/react';

const userSession = new UserSession({ appConfig })
const putFileOptions = {
  encrypt: false
}
const getFileOptions = {
  decrypt: false
}

const Score = () => {
  const [isPublic, setIsPublic] = useState(true)
  const [clicks, setClicks] = useState(0)
  const [gaiaClicks, setGaiaClicks] = useState(0)

  const handleClicks = () => {
    let tempClicks = clicks + 1
    setClicks(tempClicks)
  }

  const saveClicks = async () => {
    // call data store saveClicks
    // pass clicks, isPublic
    await userSession.putFile(CLICKS_FILENAME, JSON.stringify(clicks), putFileOptions).then(console.log)
  }

  const fetchClicks = async () => {
    console.log("fetchClicks")
    await userSession.getFile(CLICKS_FILENAME, getFileOptions).then(fileContents => {
      const fc= JSON.parse(fileContents)
      console.log("fileContents : ", typeof(fc))
    })
  }


  return (
    <div className="score-cols columns">

      <div className="score-col column">
        <div className="click-btn" onClick={handleClicks}>click me</div>
        <div className="save-btn" onClick={saveClicks}>save clicks</div>
        <div className="score">clicks : {clicks}</div>
        <div className="save-btn" onClick={fetchClicks}>get gaia clicks</div>
        <div className="score">gaia clicks : </div>
      </div>

    </div>
  );
};

export default Score;