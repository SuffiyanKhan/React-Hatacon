import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";

export const login = (data) =>{
    try {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = errorCode.slice(5).toUpperCase();
          const errMessage = errorMessage.replace(/-/g, " ");
          console.log(errMessage)
        });
    } catch (error) {
        console.error(error.message)
    }
   
} 