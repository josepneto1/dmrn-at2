import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqYD9C39dGHKkmlz3_71nRpAB_bA-Hc_E",
  authDomain: "infnet-react-native.firebaseapp.com",
  databaseURL: "https://infnet-react-native-default-rtdb.firebaseio.com",
  projectId: "infnet-react-native",
  storageBucket: "infnet-react-native.appspot.com",
  messagingSenderId: "420016728408",
  appId: "1:420016728408:web:9a4872735e1aedbad39d2d"
};

const app = initializeApp(firebaseConfig);

export default app;