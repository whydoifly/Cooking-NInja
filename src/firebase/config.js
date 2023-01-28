import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCeheJwi5JGB9UeefTp1bWm9rABb-_DuQs',
  authDomain: 'cooking-ninja-e3533.firebaseapp.com',
  projectId: 'cooking-ninja-e3533',
  storageBucket: 'cooking-ninja-e3533.appspot.com',
  messagingSenderId: '293242142950',
  appId: '1:293242142950:web:2e631a96d37c4afd697b27',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
