//Profile page to display profile of users who are not logged in
//Does not contain "edit profile" functionality
//THIS PAGE IS NOT CURRENTLY BEING USED. Will be used in the future for people to look at other people's profiles once that's implemented.

import React, { useState } from 'react';
import Profile from '../components/Page_Layout/Profile_unused';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    //TODO: goal is to pass in the user through url (query parameter) or prop.
    // THEN, get state variables from database according to the queried user
    this.state = {
      username: '',
      name: '',
      image: '',
      email: '',
      linkedIn: '',
      facebook: '',
      skills: '',
      projectInterest: '',
      points: ''
    }
  }

  render() {
    return (
      <div>
        <Profile
          image={this.state.image || ''}
          name={this.state.name || ''}
          username={this.state.username || ''}
          email={this.state.email || ''}
          linkedIn={this.state.linkedIn || ''}
          facebook={this.state.facebook || ''}
          skills= {this.state.skills || ''}
          projectInterest= {this.state.projectInterest || ''}
          points={this.state.points || ''} // We can delete points here if we don't want that info available to others.
        />
      </div>
    );
  }
}

ProfilePage.propTypes = {
};

export default ProfilePage;