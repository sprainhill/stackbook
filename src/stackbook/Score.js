import React, { useState, useEffect } from 'react';
import { Connect } from '@blockstack/connect'
import { saveClicks } from "../assets/data-store"
import { CLICKS_FILENAME } from "../assets/constants"
import { useConnect } from '@blockstack/connect'
import { UserSession } from "blockstack"
import { appConfig } from "../assets/constants"


// const userSession = new UserSession({ appConfig })
// const putFileOptions = {
//   encrypt: false
// }
// const getFileOptions = {
//   decrypt: false
// }


const Score = () => {
  const { authOptions } = useConnect()
const { userSession } = authOptions

const userData = userSession.loadUserData()

  const [isPublic, setIsPublic] = useState(true)
  const [clicks, setClicks] = useState(0)
  const [gaiaClicks, setGaiaClicks] = useState(0)

  const handleClicks = () => {
    let tempClicks = clicks + 1
    setClicks(tempClicks)
  }

  const saveClicks = async () => {
    await userSession.putFile(CLICKS_FILENAME, JSON.stringify(clicks), {encrypt: false}).then(console.log)
  }

  const fetchClicks = async () => {
    await userSession.getFile(CLICKS_FILENAME, {decrypt: false}).then(fileContents => {
      const fc = JSON.parse(fileContents)
      setGaiaClicks(fc)
      
    })
  }


  return (
    <Connect>

      <div className="score-cols columns">
  
        <div className="score-col column">
          <div className="click-btn" onClick={handleClicks}>click me</div>
          <div className="save-btn" onClick={fetchClicks}>get gaia clicks</div>
          <div className="score">gaia clicks : {gaiaClicks}</div>
        </div>
  
      </div>
    </Connect>
    );
};

export default Score;
