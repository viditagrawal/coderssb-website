//Profile page of user who is currently logged in
//Contains "edit profile" functionality
//THIS PAGE IS CURRENTLY BEING USED: NAVIGATE HERE BY LOGGING IN AND CLICKING ON YOUR IMAGE IN THE TOP RIGHT

import React, { useState } from 'react';
import '../css/Profile.css';

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
    this.state = {
      loggedIn: sessionStorage.getItem('loggedIn') || false,
        username: sessionStorage.getItem('username'),
        name: sessionStorage.getItem('name'),
        image: sessionStorage.getItem('image'),
        email: sessionStorage.getItem('email'),
        linkedIn: sessionStorage.getItem('linkedIn'),
        facebook: sessionStorage.getItem('facebook'),
        skills: sessionStorage.getItem('skills'),
        projectInterest: sessionStorage.getItem('projectInterest'),
        points: sessionStorage.getItem('points'),
        edit: false
      }
  }
  else {
    this.state = {
      loggedIn: false,
        username: '',
        name: '',
        image: '',
        email: '',
        linkedIn: '',
        facebook: '',
        skills: '',
        projectInterest: '',
        points: 0,
        edit: false
      }
  }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
    this.render();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    //Another todo: i'm not sure when to retrieve database variables to store in session storage.
    //Here, I should save the changed variables to session storage, but I was thinking that once
    //the database saves these variables, then session storage can pull from the updated database
    //values, using email (unchangeable) as a key.
  }

  //When the user goes to their profile, display fields based on session storage (should be updated
  //from database). Then, they can choose to edit their profile (using a button). The fields should
  //then turn into forms, where users can edit the info. The info should be automatically updated
  //when they enter letters in the form (no need for "save" button). Then, when they're done editing,
  //they can press the "Done Editing" button to go back to the page showing fields (no longer the form).

  render() {

  var buttonText;
    if (this.state.edit) {
      buttonText = "Done Editing";
    } else {
      buttonText = "Edit Profile";
    }

  return(
      <div id="profile-outer-body">
      {!this.state.loggedIn ?
      <div><h1>Please log in.</h1></div>
    :
      <div id="profile-inner-body"><img style={{borderRadius: '9999px', height: '10rem', width: '10rem' }} src={this.state.image || ''}/>
        <h1 id="profile-h">Profile for {this.state.username || ''}</h1>
        <div id = "wrap">
          <div id = "content">
        { this.state.edit ? 
        <form id="profile-form">
          <br/>
        <label>
            Name:
            <input id="profile-id"
              name="name"
              type="text"
              value={this.state.name || ''}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Email address: {this.state.email || ''}
          </label>
          <br/>
          <label>
            LinkedIn:
            <input id="profile-id"
              name="linkedIn"
              type="text"
              value={this.state.linkedIn || ''}
              onChange={this.handleInputChange} />
          </label>
      <br/>
      <label>
            Facebook:
            <input id="profile-id"
              name="facebook"
              type="text"
              value={this.state.facebook || ''}
              onChange={this.handleInputChange} />
          </label>
      <br/>
      <label>
            Skills:
            <input id="profile-id"
              name="skills"
              type="text"
              value={this.state.skills || ''}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Points: {this.state.points || 0}
          </label>
      <br/>
          <label>
            Interested in collaborating on projects?:
            <input id="profile-id"
              name="projectInterest"
              type="text"
              value={this.state.projectInterest || ''}
              onChange={this.handleInputChange} />
          </label>
          <br/>
      </form> 
        : 
        <p id="profile-p">Name: {this.state.name} <br/>
          Email address: {this.state.email || ''}<br/>
          LinkedIn: {this.state.linkedIn || ''}<br/>
          Facebook: {this.state.facebook || ''}<br/>
          Skills: {this.state.skills || ''}<br/>
          Points: {this.state.points || 0}<br/>
          Interested in collaborating on projects?: {this.state.projectInterest || ''}
          </p>
        }
       </div>
       </div>
      <button id="profile-button" onClick={this.toggleEdit}>{buttonText}</button>
      </div>
  }
  </div>
  );
  }
}

UserProfilePage.propTypes = {
};


export default UserProfilePage;