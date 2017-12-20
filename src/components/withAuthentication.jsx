import React from 'react';

import { firebase } from '../firebase';

const withAuthentication = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    getChildContext() {
      return {
        authUser: this.state.authUser,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser =>
        (authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }))));
    }

    render() {
      return (
        <Component />
      );
    }
  };
};

export default withAuthentication;
