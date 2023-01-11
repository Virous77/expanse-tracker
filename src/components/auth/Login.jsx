import React, { useEffect, useState } from "react";
import "./Auth.css";
import { AiOutlineClose } from "react-icons/ai";
import { userUserContext } from "../../store/userContext";
import { BsCamera, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import welcome from "../../assets/welcome.svg";
import Header from "../Header";

const Login = () => {
  const [userImage, setUserImage] = useState("");
  const {
    handleChange,
    userData,
    localStateInfo,
    setLocalStateInfo,
    loginUser,
  } = userUserContext();
  const { password, email } = userData;
  const { showPass, isLoading } = localStateInfo;

  useEffect(() => {
    const result = localStorage.getItem("expenseProfile");
    const data = result ? JSON.parse(result) : "";
    setUserImage(data);
  }, []);
  return (
    <>
      <div className="overLay" />
      <section className="login">
        <Header name="Login" />

        <div className="loginUserImage">
          <div className={`userProfile  ${userImage ? "" : "userPicBorder"}`}>
            {!userImage ? (
              <label>
                <BsCamera size={25} />
              </label>
            ) : (
              <img src={userImage} alt="ProfilePic" />
            )}
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
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

          <button onClick={loginUser}>
            {isLoading ? "Processing..." : "Login"}
          </button>
        </form>

        <div className="welcome">
          <img src={welcome} alt="welcome" />
        </div>
      </section>
    </>
  );
};

export default Login;
