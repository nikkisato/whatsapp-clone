import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyABx5gI6GdxhbhJbMi4lis8hP7_bEzRvxA',
  authDomain: 'whatsapp-clone-1ed70.firebaseapp.com',
  projectId: 'whatsapp-clone-1ed70',
  storageBucket: 'whatsapp-clone-1ed70.appspot.com',
  messagingSenderId: '19295582219',
  appId: '1:19295582219:web:50f23b530c698252056f0e',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
