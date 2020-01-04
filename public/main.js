$("#signup-button").click(e => {
  e.preventDefault();
  loginWithGoogle();
});
$("#get-started").click(e => {
  e.preventDefault();
  loginWithGoogle();
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    $("#login-button").html("Open");
    $("#login-button").click(e => {
      e.preventDefault();
      window.location.replace("profile.html");
      console.log(user);
    });
  }
});

firebase
  .auth()
  .getRedirectResult()
  .then(result => {
    if (result.credential && result !== null) {
      console.log(result.user);
      // This gives you a Google Access Token. You can use it to access the Google API.
      token = result.credential.accessToken;
      console.log(result.additionalUserInfo.isNewUser);
      var user = createUser(result.user.email);
      console.log(user);
      user.get().then(function(doc) {
        if (doc.exists) {
          console.log(createUser);

          console.log("past createUser");

          if (result.additionalUserInfo.isNewUser) {
            window.location.replace("settings.html");
          } else {
            window.location.replace("profile.html");
          }
          console.log(result);
        } else {
          db.collection("users")
            .doc(result.user.email)
            .set({
              email: result.user.email,
              id: "",
              friends: []
            })
            .then(() => {
              console.log("past createUser");

              if (result.additionalUserInfo.isNewUser) {
                window.location.replace("settings.html");
              } else {
                window.location.replace("profile.html");
              }
              console.log(result);
            });
        }
      });
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

var typed = new Typed(".type", {
  strings: [
    "squads.",
    "machine learning.",
    "decentralization.",
    "crowdsourcing."
  ],
  typeSpeed: 80,
  backSpeed: 30,
  backDelay: 1400,
  loop: true
});
