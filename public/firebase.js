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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

firebase.auth().useDeviceLanguage();

provider.setCustomParameters({
  'login_hint': 'user@example.com'
});