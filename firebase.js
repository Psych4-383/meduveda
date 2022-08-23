const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDKrlmu73npEKvO508yMFXAem_iRWI4M1Q",

  authDomain: "meduveda-a13d1.firebaseapp.com",

  projectId: "meduveda-a13d1",

  storageBucket: "meduveda-a13d1.appspot.com",

  messagingSenderId: "99500263542",

  appId: "1:99500263542:web:35b5932f66f7cf13ddb757",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);
const db = getFirestore(fireApp);

module.exports = { fireApp, auth, db };
