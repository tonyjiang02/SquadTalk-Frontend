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

loginWithGoogle = () => {
  console.log("test");
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  firebase.auth().useDeviceLanguage();

  provider.setCustomParameters({
    login_hint: "user@gmail.com"
  });

  firebase.auth().signInWithRedirect(provider);

  firebase
    .auth()
    .getRedirectResult()
    .then(result => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        token = result.credential.accessToken;
        console.log(result);
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log(user);
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

const getToken = () => token;
