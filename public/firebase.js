const firebaseConfig = {
  apiKey: "AIzaSyD4n5ttz_4F-an_vwKdJTOrj_iU7QQKvR8",
  authDomain: "squadtalk-8b371.firebaseapp.com",
  databaseURL: "https://squadtalk-8b371.firebaseio.com",
  projectId: "squadtalk-8b371",
  storageBucket: "squadtalk-8b371.appspot.com",
  messagingSenderId: "51258809494",
  appId: "1:51258809494:web:1295e163468fd9790bf6b7",
  measurementId: "G-N01Q9DVZCE"
};

let token = null;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const loginWithGoogle = () => {
  console.log("test");
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().useDeviceLanguage();

  provider.setCustomParameters({
    login_hint: "user@gmail.com"
  });

  firebase.auth().signInWithRedirect(provider);
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      window.location.replace("index.html");
    })
    .catch(function(error) {
      // An error happened
    });
};

const getToken = () => token;

const setId = (id, token) => {};

const getId = (id, token) => {};

const addFriend = (email, token) => {};

const sendMessage = (id, token) => {};

const getFriends = token => {};

const removeFriend = token => {};

const setPreferences = preferences => {};

const getPreferences = () => {};
