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

  firebase.auth().useDeviceLanguage();

  provider.setCustomParameters({
    login_hint: "user@gmail.com"
  });

  firebase.auth().signInWithRedirect(provider);
};

db = firebase.firestore()

logout = () => {
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

getToken = () => token;

createUser = (email) => {
  var user = db.collection('users').doc(email);
  user.get().then(function (doc) {
    if (doc.exists) {

    } else {
      user.set({
        email: email,
        id: '',
        friends: []
      })
    }
  })
}

setId = (id, email) => {
  db.collection('users').doc(email).update({
    id: id
  })
};

getId = (email) => {
  return db.collection('users').doc(email).get();
};

addEmail = (friendEmail, email) => {
  db.collection('users').doc(email).get().then(function (doc) {
    var friends = doc.data().friends;
    friends.push(friendEmail);
    db.collection('users').doc(email).update({
      friends: friends
    })
  })
};

sendMessage = (text,id,email) => {
  
};

getEmails = email => {
  return db.collection('users').doc(email).get()
};

removeEmail = (friendEmail, email) => { 
  db.collection('users').doc(email).get().then(function (doc) {
    var friends = doc.data().friends;
    friends.splice(friends.indexOf(friendEmail))
    db.collection('users').doc(email).update({
      friends: friends
    })
  })
};

setPreferences = preferences => {};

const getPreferences = () => { };
