import { firebaseConfig } from "./config";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
// signInWithPopup(auth, provider)
//     .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//     }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//     });

export const signInWithGoogle = () => signInWithPopup(auth, provider);