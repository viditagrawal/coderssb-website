//Profile component: not used by UserProfilePage.js (since that requires ability to edit state)
//Used by ProfilePage.js to display profiles of others (who are not currently logged in)
//THIS IS CURRENTLY NOT BEING USED. Will be used once ../pages/ProfilePage.js is used.

import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div>
    <img style={{borderRadius: '9999px', height: '10rem', width: '10rem' }} src={props.image}/>
      <h1>Profile for {props.username}</h1>
      <p>
      Name: {props.name} <br/>
      Email address: {props.email}<br/>
      LinkedIn: {props.linkedIn}<br/>
      Facebook: {props.facebook}<br/>
      Skills: {props.skills}<br/>
      Interested in collaborating on projects?: {props.projectInterest} <br/>
      Points: {props.points} // We can delete points here if we don't want that info available to others.
      </p>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Profile;