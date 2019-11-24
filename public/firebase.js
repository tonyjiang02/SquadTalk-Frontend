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
const getToken = () => token;

const createUser = (email) => {
  var user = db.collection('users').doc(email);
  user.get().then(function(doc){
    if(doc.exists){

    }else {
      user.set({
        email: email,
        id: '',
        friends: []
      })
    }
  })
}

const setId = (id, email) => {
  db.collection('users').doc(email).update({
    id: id
  })
};

const getId = (email) => {
  return db.collection('users').doc(email).get();
};

const addFriend = (friendEmail, email) => {
  db.collection('users').doc(email).get().then(function(doc){
    var friends = doc.data().friends;
    friends.append(friendEmail);
    db.collection('users').doc(email).update({
      friends: friends
    })
  })
};

const sendMessage = (id, token) => { };

const getFriends = token => { };

const removeFriend = token => { };

const setPreferences = preferences => { };

const getPreferences = () => { };
