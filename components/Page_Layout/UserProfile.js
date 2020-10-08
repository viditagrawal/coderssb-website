//Profile page of user who is currently logged in
//Contains "edit profile" functionality
//THIS PAGE IS CURRENTLY BEING USED: NAVIGATE HERE BY LOGGING IN AND CLICKING ON YOUR IMAGE IN THE TOP RIGHT

//Expected behavior:
//When the user goes to their profile, display fields based on session storage (should be updated
//from database). Then, they can choose to edit their profile (using a button). The fields should
//then turn into forms, where users can edit the info. The info should be automatically updated
//when they enter letters in the form (no need for "save" button). Then, when they're done editing,
//they can press the "Done Editing" button to go back to the page showing fields (no longer the form).

import React, { useState, useEffect } from "react";
import "../../css/Profile.css";

export default function UserProfile(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [skills, setSkills] = useState(null);
  const [points, setPoints] = useState(0);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (props.googleUserObject && props.googleUserObject.profileObj) {
      setLoggedIn(true);
      setUsername(props.googleUserObject.profileObj.email.split("@")[0]);
      setName(props.googleUserObject.profileObj.name);
      setImage(props.googleUserObject.profileObj.imageUrl);
      setEmail(props.googleUserObject.profileObj.email);
      //setLinkedIn() (database query)
      //setFacebook() (database query)
      //setSkills() (database query)
      //setPoints() (database query)
    } else {
      setLoggedIn(false);
    }
  }, [props.googleUserObject]);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  var buttonText;
  if (edit) {
    buttonText = "Done Editing";
  } else {
    buttonText = "Edit Profile";
  }

  return (
    <div id="profile-outer-body">
      {false ? (
        <div>
          <br />
          <h1>Please log in.</h1>
        </div>
      ) : (
        <div id="profile-inner-body">
          <img
            style={{ borderRadius: "9999px", height: "10rem", width: "10rem" }}
            src={image}
          />
          <br />
          <h1 id="profile-h">Profile for {name}</h1>

          {/* <div id = "wrap">
          <div id = "content">
        { edit ? 
        <form id="profile-form">
          <br/>
        <label>
            Name: {name}
          </label>
          <br/>
          <label>
            Email address: {email}
          </label>
          <br/>
          <label>
            LinkedIn:
            <input id="profile-id"
              name="linkedIn"
              type="text"
              value={linkedIn}
              onChange={e => setLinkedIn(e.target.value)} />
          </label>
      <br/>
      <label>
            Facebook:
            <input id="profile-id"
              name="facebook"
              type="text"
              value={facebook}
              onChange={e => setFacebook(e.target.value)} />
          </label>
      <br/>
      <label>
            Skills:
            <input id="profile-id"
              name="skills"
              type="text"
              value={skills}
              onChange={e => setSkills(e.target.value)} />
          </label>
          <br/>
          <label>
            Points: {points}
          </label>
      <br/>
      </form> 
        : 
        <p id="profile-p">Name: {name} <br/>
          Email address: {email}<br/>
          LinkedIn: {linkedIn}<br/>
          Facebook: {facebook}<br/>
          Skills: {skills}<br/>
          Points: {points}
          </p>
        }
       </div>
       </div> */}

          <button id="profile-button" onClick={toggleEdit}>
            {buttonText}
          </button>
          <h1 id="profile-h">Feature Coming soon ... </h1>
        </div>
      )}
    </div>
  );
}
