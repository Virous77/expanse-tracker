import React from "react";
import "./Auth.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsCamera, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import register from "../../assets/register.svg";
import { userUserContext } from "../../store/userContext";

const Register = () => {
  const {
    preview,
    saveUser,
    handleChange,
    userData,
    localStateInfo,
    setLocalStateInfo,
    deleteImage,
    uploadProfileImage,
  } = userUserContext();
  const { userName, uniqueId, password, email } = userData;
  const { uploadImage, showPass, isLoading } = localStateInfo;

  return (
    <>
      <div className="overLay" />
      <section className="authMain">
        <header>
          <h1>Register</h1>
          <AiOutlineClose size={22} cursor="pointer" />
        </header>

        <div className={`userProfile ${uploadImage ? "" : "userPicBorder"}`}>
          {!uploadImage ? (
            <label htmlFor="image">
              <BsCamera size={25} cursor="pointer" />
            </label>
          ) : (
            <img src={uploadImage} alt="Profile" />
          )}
          <input
            type="file"
            id="image"
            onChange={(e) => {
              preview(e);
              uploadProfileImage(e);
            }}
          />
          {uploadImage && (
            <label
              htmlFor="change"
              className="changeImage"
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

        <form className="registerForm" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full name"
            value={userName}
            onChange={handleChange}
            name="userName"
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            name="email"
          />

          <input
            type="text"
            placeholder="User id"
            value={uniqueId}
            onChange={handleChange}
            name="uniqueId"
          />

          <div className="regPass">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handleChange}
              name="password"
            />
            <p>
              {!showPass ? (
                <BsEyeFill
                  onClick={() =>
                    setLocalStateInfo({ ...localStateInfo, showPass: true })
                  }
                  size={18}
                  cursor="pointer"
                  color="blueviolet"
                />
              ) : (
                <BsEyeSlashFill
                  onClick={() =>
                    setLocalStateInfo({ ...localStateInfo, showPass: false })
                  }
                  size={18}
                  cursor="pointer"
                  color="blueviolet"
                />
              )}
            </p>
          </div>

          <button onClick={saveUser} type="button">
            {isLoading ? "Processing...." : "Register"}
          </button>
        </form>

        <div className="regCoverImg">
          <img src={register} alt="cover" />
        </div>
      </section>
    </>
  );
};

export default Register;
