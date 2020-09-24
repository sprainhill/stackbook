import React from 'react';

const Overview = props => {
  const { userData } = props
  return (
    <div className="overview-cols columns">
      <div className="overview-col column">

        <div className="columns">
          <div className="column">
            <span className="ov-attribute">Username: </span>{userData.username}
          </div>
        </div>

        <div className="columns">
          <div className="column">
          <span className="ov-attribute">Stackers: </span>{0}
          </div>
        </div>

        <div className="columns">
          <div className="column">
          <span className="ov-attribute">Apps: </span>{Object.keys(userData.profile.apps).length}
          </div>
        </div>

        <div className="columns">
          <div className="column">
          <span className="ov-attribute">Score: </span>{0}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Overview;
