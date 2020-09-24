import React, { useState, useEffect } from 'react';
import Overview from "./Overview"
import Stackers from "./Stackers"
import AppsTab from "./AppsTab"
import Score from "./Score"

const StackCard = props => {
  const { userData } = props
  const [tab, setTab] = useState("overview")
  const [twitterHandle, setTwitterHandle] = useState("")
  console.log("StackCard userData : ", userData)

  useEffect(() => {
    for (const acc in userData.profile.account) {
      if (userData.profile.account[acc].service === "twitter") {
      setTwitterHandle(`@${userData.profile.account[acc].identifier}`)
    }
  }

  })

  let displayTab
  if (tab === "overview") {
    displayTab = <Overview userData={userData} />
  } else if (tab === "stackers") {
    displayTab = <Stackers userData={userData} />
  } else if (tab === "appsTab") {
    displayTab = <AppsTab userData={userData} />
  } else if (tab === "score") {
    displayTab = <Score userData={userData} />
  }

  return (
    <div className="card stack-card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={userData.profile.image[0].contentUrl}alt="Placeholder"></img> </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{userData.profile.name}</p>
            <p className="subtitle is-6">{twitterHandle}</p>
          </div>
        </div>

        <div className="stack-card-menu columns">
          <div className="column stack-card-menu-choice" onClick={() => setTab("overview")}>
            Overview
          </div>

          <div className="column stack-card-menu-choice" onClick={() => setTab("stackers")}>
            Stackers
          </div>
          <div className="column stack-card-menu-choice" onClick={() => setTab("appsTab")}>
            Apps
          </div>
          <div className="column stack-card-menu-choice" onClick={() => setTab("score")}>
            Score
          </div>
        </div>

        <div className="columns">
          <div className="column">
            {displayTab}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StackCard;
