import { useContext, useState, createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import useUploadProfile from "../hooks/useUploadImage";
import { useAppContext } from "./appContext";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  ///Components State
  const localState = {
    uploadImage: null,
    showPass: false,
    isLoading: false,
  };
  const [localStateInfo, setLocalStateInfo] = useState(localState);

  const initialState = {
    userName: "",
    uniqueId: "",
    password: "",
    email: "",
    isLoggedIn: false,
  };
  const [userData, setUserData] = useState(initialState);
  const { userName, uniqueId, password, email } = userData;
  const { uploadImage } = localStateInfo;

  ///Custom Hooks
  const {
    uploadImage: uploadProfileImage,
    imageAsset,
    deleteImage,
  } = useUploadProfile();
  const { notificationSet } = useAppContext();

  ///Form inputHandler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  ///User image preview
  const preview = (event) => {
    const targetFiles = event.target.files[0];
    setLocalStateInfo({
      ...localStateInfo,
      uploadImage: URL.createObjectURL(targetFiles),
    });
  };

  ///New user creating
  const saveUser = async () => {
    setLocalStateInfo({ ...localStateInfo, isLoading: true });

    ///validation
    if (!uploadImage || !uniqueId || !userName || !password || !email) {
      notificationSet({
        message: "All field Must be filled!",
        status: "error",
      });
      setLocalStateInfo({ ...localStateInfo, isLoading: false });
      return;
    }

    try {
      ///User Authentication
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const tempUserData = {
        name: userName,
        email,
        uid: user.uid,
        createdAt: serverTimestamp(),
        photoURL: imageAsset || null,
        uniqueId,
      };

      ///User Adding Database
      await addDoc(collection(db, "users"), tempUserData);
      localStorage.setItem("expense", JSON.stringify({ isLogged: true }));
      localStorage.setItem("expenseProfile", JSON.stringify(imageAsset));

      // State Clear
      setUserData({
        ...userData,
        isLogged: true,
        email: "",
        password: "",
        userName: "",
        uniqueId: "",
      });
      setLocalStateInfo({
        ...localStateInfo,
        isLoading: false,
        uploadImage: null,
      });
    } catch (error) {
      ////Error state
      notificationSet({
        message: "Something went wrong,Try again!",
        status: "error",
      });
      setLocalStateInfo({ ...localStateInfo, isLoading: false });
    }
  };
  return (
    <UserContext.Provider
      value={{
        preview,
        saveUser,
        handleChange,
        userData,
        setLocalStateInfo,
        localStateInfo,
        deleteImage,
        uploadProfileImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userUserContext = () => useContext(UserContext);

export default UserContext;
