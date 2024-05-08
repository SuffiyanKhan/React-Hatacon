import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";

export const GetDataFromLocalStorage = (uid) => {
    return new Promise((resolve, reject) => {
        try {
            const q = collection(db, uid);
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const count = querySnapshot.size;
                const orderProducts = [];
                querySnapshot.forEach((doc) => {
                    orderProducts.push({ id: doc.id, data: doc.data() });
                });
                resolve({ orderProducts, count });
            });
        } catch (error) {
            reject(error);
        }
    });
};

export default GetDataFromLocalStorage;
