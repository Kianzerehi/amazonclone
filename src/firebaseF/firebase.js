import { Google } from '@mui/icons-material';
import {initializeApp} from 'firebase/app'
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDq5qdSGQEKgItigkK8EB8jWJUqcBSfp_U",
    authDomain: "clone-721b8.firebaseapp.com",
    projectId: "clone-721b8",
    storageBucket: "clone-721b8.appspot.com",
    messagingSenderId: "316451937218",
    appId: "1:316451937218:web:6fed6cee19bb81895b945b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account'
  })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);






