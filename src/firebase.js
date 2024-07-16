import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "Google_API_Key",
    authDomain: "cupboard-official.firebaseapp.com",
      /*   databaseURL: "YOUR_DATABASE_URL", */
    projectId: "cupboard-official",
    storageBucket: "cupboard-official.appspot.com",
    messagingSenderId: "949500608784",
    appId: "1:949500608784:web:dc71a5b1d4015124896595",
    measurementId: "G-68LKB7FV7B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };