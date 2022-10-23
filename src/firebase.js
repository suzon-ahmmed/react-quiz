// import { initializeApp } from "firebase/app";

// // firebase configuration
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET_ID,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
// });

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// general-quiz

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCU8tjW6_8tx-Jq4Cnz959Ro8RGPP8MzeA",
//   authDomain: "genetal-quiz.firebaseapp.com",
//   databaseURL: "https://genetal-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "genetal-quiz",
//   storageBucket: "genetal-quiz.appspot.com",
//   messagingSenderId: "115891451907",
//   appId: "1:115891451907:web:304d517f97954e63d03636"
// };
