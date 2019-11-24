
$("#login-button").click(e => {
  e.preventDefault();
  loginWithGoogle();
});

$("#login-button").click(e => {
  e.preventDefault();
  loginWithGoogle();
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
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
  }
});
