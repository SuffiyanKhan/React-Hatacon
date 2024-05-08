import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../Config/FirebaseConfig'
export const GetOrderProducts = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const q = collection(db, id);
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const count = querySnapshot.size;
                const orderProduct = [];
                querySnapshot.forEach((doc) => {
                    orderProduct.push({ id: doc.id, data: doc.data() });
                });
                resolve(orderProduct);
            });
        } catch (error) {
            reject(error);
        }
    });
}