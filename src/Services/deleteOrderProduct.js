import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";

export const DeleteOrderProducts =async (deleteid, id) => {
    try {
        await deleteDoc(doc(db, id, deleteid));
    } catch (error) {
        console.error(error.message)
    }
}