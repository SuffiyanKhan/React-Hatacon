import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";

export const SaveLocalStorage = async (image, name, price, userId) => {
    try {
        const obj = {
            image,
            name,
            price
        };
        const docRef = await addDoc(collection(db, userId), {
            ...obj,
            userId
        });
        console.log("Document written with ID: ", docRef.id);
        console.log(userId)
    } catch (error) {
        console.error(error.message);
    }
}
