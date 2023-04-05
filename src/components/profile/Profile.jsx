import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header";
import { userUserContext } from "../../store/userContext";
import { TbEdit } from "react-icons/tb";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useEffect } from "react";
import Loader from "../UI/Loader";
import { useAppContext } from "../../store/appContext";
import { db } from "../../firebase/firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Profile = () => {
  const {
    deleteImage,
    uploadProfileImage,
    logoutUser,
    imageAsset,
    data,
    loading,
  } = userUserContext();
  const { notificationSet, setShowModal } = useAppContext();

  const initialState = {
    name: data[0]?.name,
    userId: data[0]?.uniqueId,
    email: data[0]?.email,
  };
  const [userData, setUserData] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [editProfile, setEditProfile] = useState(false);
  const { name, userId, email } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  ///User image preview
  const preview = (event) => {
    const targetFiles = event.target.files[0];
    setPreviewImage(URL.createObjectURL(targetFiles));
  };

  const saveChanges = async () => {
    if (!name || !userId || !previewImage) {
      notificationSet({
        message: "All field must be filled!",
        status: "error",
      });
      return;
    }

    const tempData = {
      name,
      email,
      photoURL: imageAsset ? imageAsset : data[0]?.photoURL,
      createdAt: data[0]?.createdAt,
      editedAt: serverTimestamp(),
      uid: data[0]?.uid,
      uniqueId: userId,
    };
    try {
      await setDoc(doc(db, "users", data[0]?.id), tempData);
      setEditProfile(false);
      localStorage.setItem(
        "expenseProfile",
        JSON.stringify(imageAsset ? imageAsset : data[0]?.photoURL)
      );
    } catch (error) {
      notificationSet({
        message: "Something went wrong,Try again!",
        status: "error",
      });
    }
  };

  useEffect(() => {
    setUserData(initialState);
    setPreviewImage(data[0]?.photoURL);
  }, [data]);

  return (
    <>
      <div className="overLay" onClick={() => setShowModal("")} />
      <section className="profile">
        <Header name="Profile" />

        {loading && <Loader />}

        {!loading && (
          <div className="profileSec">
            <div className="profileImage">
              <img src={previewImage} alt="user" />

              {editProfile && (
                <label
                  htmlFor="change"
                  className="changeProfile"
                  onClick={deleteImage}
                >
                  <TbEdit /> Edit
                </label>
              )}
              <input
                type="file"
                id="change"
                onChange={(e) => {
                  preview(e);
                  uploadProfileImage(e);
                }}
              />
            </div>

            <div className="profileId">
              {editProfile ? (
                <input
                  type="text"
                  value={userId}
                  onChange={handleChange}
                  name="userId"
                />
              ) : (
                <p>{userId}</p>
              )}
            </div>

            <div className="profileName">
              {editProfile ? (
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              ) : (
                <h3>{name}</h3>
              )}
            </div>

            <span>{email}</span>

            <div className="editProfile">
              {!editProfile && (
                <button className="edit" onClick={() => setEditProfile(true)}>
                  Edit Profile
                </button>
              )}
              {editProfile && (
                <button
                  className="logout"
                  onClick={() => setEditProfile(false)}
                >
                  Cancel
                </button>
              )}
              {!editProfile && (
                <button className="logout" onClick={logoutUser}>
                  <RiLogoutCircleRLine /> Logout
                </button>
              )}

              {editProfile && (
                <button className="edit" onClick={saveChanges}>
                  Save Changes
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
