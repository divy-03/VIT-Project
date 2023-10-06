import React, { Fragment, useRef, useState } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation, useLoginUserMutation } from "../../User/userApi";
// import Loader from "../layout/Loader/Loader";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [addUser, { isLoading }] = useAddUserMutation();
  const [loginUser] = useLoginUserMutation();

  const { name, email, password } = user;

  const loginSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser({
      email: loginEmail,
      password: loginPassword,
    });
    if (result.error) {
    } else {
      if (result.data.success === true) {
        navigate("/");
      }
    }
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const result = await addUser({ name, email, password, avatar });

    if (result.error) {
    } else {
      if (result.data.success === true) {
        navigate("/");
      }
    }
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const switchTabs = (e, tab, switcherTabRef) => {
    if (tab === "login") {
      switcherTabRef.current.classList.add("shiftToNeutral");
      switcherTabRef.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTabRef.current.classList.add("shiftToRight");
      switcherTabRef.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <div className="LoginSignUpContainer flex-col">
        <div className="LoginSignUpBox">
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, "login", switcherTab)}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, "register", switcherTab)}>
              REGISTER
            </p>
          </div>
          <div className="line">
            <button ref={switcherTab}></button>
          </div>
          <div className="vitLogo">VIT LOGO</div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <i class="fa-solid fa-lock-open"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                autoComplete="current-password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value={"Login"} className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <i class="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <i class="fa-solid fa-lock-open"></i>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <div id="registerImage" className="flex-row">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/jpeg, image/png, image/gif"
                onChange={registerDataChange}
              />
            </div>
            <input
              type="submit"
              value={"Register"}
              className="signUpBtn"
              disabled={isLoading ? true : false}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
