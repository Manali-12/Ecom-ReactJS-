import { firebaseConfig } from "./config";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

const handleUserProfile = async (user, additionalData) => {
    console.log(user)
    if (!user) return;
    const { uid, displayName, email } = user;
    const timestamp = new Date();
    const userRef = doc(db, "user/" + uid);
    // const snap = await get(userRef);

    if (!userRef.exists) {
        try {
            setDoc(userRef, {
                displayName,
                email,
                craetedDate: timestamp,
                ...additionalData
            })
        }
        catch (err) {
            console.log("error");
        }
    }
    return userRef;

}


export { signInWithGoogle, auth, handleUserProfile }