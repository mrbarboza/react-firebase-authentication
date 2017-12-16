const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyADw--gm8OE_knpFb3h8zwwDoPmqpguTe8',
  authDomain: 'budget-manager-1d3d9.firebaseapp.com',
  databaseURL: 'https://budget-manager-1d3d9.firebaseio.com',
  projectId: 'budget-manager-1d3d9',
  storageBucket: 'budget-manager-1d3d9.appspot.com',
  messagingSenderId: '386324833221',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
