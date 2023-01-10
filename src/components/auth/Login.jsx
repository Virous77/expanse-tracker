import React, { useEffect } from "react";
import "./Auth.css";
import { AiOutlineClose } from "react-icons/ai";
import { userUserContext } from "../../store/userContext";
import { BsCamera, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const { handleChange, userData, localStateInfo, setLocalStateInfo } =
    userUserContext();
  const { password, email } = userData;
  const { showPass, isLoading } = localStateInfo;
  return (
    <>
      <div className="overLay" />
      <section className="login">
        <header>
          <h1>Login</h1>
          <AiOutlineClose size={22} cursor="pointer" />
        </header>

        <form onSubmit={(e) => e.stopPropagation()}>
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

          <button>{isLoading ? "Processing..." : "Login"}</button>
        </form>
      </section>
    </>
  );
};

export default Login;
