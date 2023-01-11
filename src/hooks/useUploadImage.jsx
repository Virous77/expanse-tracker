import { useState } from "react";
import {
  uploadBytesResumable,
  getDownloadURL,
  ref,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase/firebase.config";

const useUploadProfile = () => {
  const [imageAsset, setImageAsset] = useState(null);

  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Profile/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageAsset(downloadUrl);
        });
      }
    );
  };

  const deleteImage = () => {
    const deletRef = ref(storage, imageAsset);

    if (imageAsset) {
      deleteObject(deletRef).then(() => {
        setImageAsset(null);
      });
    }
  };

  return {
    uploadImage,
    imageAsset,
    deleteImage,
  };
};

export default useUploadProfile;
