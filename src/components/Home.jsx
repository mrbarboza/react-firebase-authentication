import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
    };
  }

  componentDidMount() {
    db.onceGetUser()
      .then(snapshot =>
        this.setState(() => ({ users: snapshot.val() })));
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = (props, { users }) =>
  (
    <div>
      <h2>List of Usernames of Users</h2>
      <p>(Saved on Sign Up in Firebase Database)</p>

      {Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
    </div>
  );

UserList.contextTypes = {
  users: PropTypes.object,
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
