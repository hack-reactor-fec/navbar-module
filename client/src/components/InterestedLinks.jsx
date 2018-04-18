import React, { Component } from 'react';
import BackThisProjectButton from './BackThisProjectButton.jsx';
import RemindMeButton from './RemindMeButton.jsx';

const InterestedLinks = props => (
  <div className="interestedLinksContainer">
    <BackThisProjectButton projectId={props.projectId} />
    <RemindMeButton projectId={props.projectId} />
  </div>
);

export default InterestedLinks;
