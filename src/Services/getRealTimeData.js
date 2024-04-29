import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";

export const GetRealProducts = (userId) => {
    return new Promise((resolve, reject) => {
        try {
            if(userId){
                const q = collection(db, userId);
                 onSnapshot(q, (querySnapshot) => {
                    const cities = [];
                    querySnapshot.forEach((doc) => {
                        cities.push(doc.data());
                    });
                    console.log("Current cities in CA: ", cities);
                    resolve(cities);
                });
            }
        } catch (error) {
            reject(error);
            console.error(error.message)
        }
    });
};
