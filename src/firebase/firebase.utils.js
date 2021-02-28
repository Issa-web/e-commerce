import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyCMr7krXl9ZBNvbgKPW4NNL0FIYojZ2Eic",
        authDomain: "e-soukou.firebaseapp.com",
        projectId: "e-soukou",
        storageBucket: "e-soukou.appspot.com",
        messagingSenderId: "355337580068",
        appId: "1:355337580068:web:e74024023ea83c73f8b2b1",
        measurementId: "G-E96JRHXZPR"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
