import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/FirebaseConfig";

export const sigupButton = (data) =>{
    if(data){
        createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message)
    // ..
  });
    }
} 