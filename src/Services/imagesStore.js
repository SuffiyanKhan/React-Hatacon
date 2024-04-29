import { storage } from "../Config/FirebaseConfig";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

export default function ImagesStore(image) {
    return new Promise(async (resolve, reject) => {
        try {
            const fileType = image[0].type;
            let imageUrl;
            let uploadProgress = 0;
            if (fileType.startsWith('image/jpeg') || fileType.startsWith('image/png') || fileType.startsWith('image/jpg')) {
                const mountainImagesRef = ref(storage, `products/images/${image[0].name}`);
                const uploadTask = uploadBytesResumable(mountainImagesRef, image[0]);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + uploadProgress + '% done');
                    },
                    (error) => {
                        console.log('Unsuccessful upload:', error);
                        reject(error);
                    },
                    async () => {
                        try {
                            imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                            console.log('File uploaded successfully.');
                            resolve(imageUrl);
                        } catch (error) {
                            console.error('Error getting download URL:', error);
                            reject(error);
                        }
                    }
                );
            } else if (fileType.startsWith('video/mp4')) {
                const mountainImagesRef = ref(storage, `products/video/${image[0].name}`);
                const uploadTask = uploadBytesResumable(mountainImagesRef, image[0]);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + uploadProgress + '% done');
                    },
                    (error) => {
                        console.log('Unsuccessful upload:', error);
                        reject(error);
                    },
                    async () => {
                        try {
                            imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                            console.log('File uploaded successfully.');
                            resolve(imageUrl);
                        } catch (error) {
                            console.error('Error getting download URL:', error);
                            reject(error);
                        }
                    }
                );
            }
        } catch (error) {
            console.error('Error:', error.message);
            reject(error);
        }
    });
}
