import React from 'react';
import PropTypes from 'prop-types';
import withAuthorization from './withAuthorization';

const AdminPage = (props, { authUser }) =>
  (
    <div>
      <h1>Admin</h1>
      <p>Restricted area! Only users with the admin rule authorized</p>
    </div>
  );

AdminPage.contextType = {
  authUser: PropTypes.object,
};

const authCondition = authUser => authUser.role === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);