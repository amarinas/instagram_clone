import { seedDatabase } from "../seed";

const config = {
      apiKey: "AIzaSyAudi3L233arBnNjH6tmUor49e2-ZS555E",
      authDomain: "instagram-clone-af317.firebaseapp.com",
      projectId: "instagram-clone-af317",
      storageBucket: "instagram-clone-af317.appspot.com",
      messagingSenderId: "548026902449",
      appId: "1:548026902449:web:97cc7e1b9f37a02e823f90"
    };

 const firebase = window.firebase.initializeApp(config);   
 const { FieldValue } = window.firebase.firestore;

 seedDatabase(firebase);

  export { firebase, FieldValue };