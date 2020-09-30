import React, { useState, useEffect } from 'react';
import { Connect } from '@blockstack/connect'
import { CLICKS_FILENAME } from "../assets/constants"
import { useConnect } from '@blockstack/connect'


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
    await userSession.putFile(CLICKS_FILENAME, JSON.stringify(clicks), {encrypt: false}).
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
