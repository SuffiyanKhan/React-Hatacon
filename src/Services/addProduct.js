import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";

export const AddProduct =async (obj) => {
    try {
        const docRef = await addDoc(collection(db, obj.userId), {
            ...obj
          });
          console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error(error)
    }
}