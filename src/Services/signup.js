import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const sigupButton = (data) => {
  try {
    if (data) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await setDoc(doc(db, "NewUsers", user.uid), {
            Email: data.email,
            Password: data.password,
            UserName: data.name,
            uid: user.uid
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = errorCode.slice(5).toUpperCase();
          const errMessage = errorMessage.replace(/-/g, " ");
          console.log(errMessage)
        });
    }
  } catch (error) {
    console.error('Error', error)
  }

} 