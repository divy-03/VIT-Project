import React, { Fragment, useState } from "react";
import { useForgotPasswordMutation } from "../../User/userApi";
import { toast } from "react-toastify";
import Loader from "../layout/Loader/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const forgotSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the forgotPassword mutation function
      const response = await forgotPassword({ email });

      // Handle the response (e.g., show a success message)
      console.log("Password reset request successful:", response);

      if (response.error) {
        toast.error(response.error.data.error);
      } else {
        if (response.data.success) {
          toast.success(response.data.message);
        }
      }
    } catch (error) {
      // Handle any errors (e.g., display an error message)
      toast.error(error);
    }
  };
  if (isLoading) {
    return (
      <Fragment>
        <Loader />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox flex-col">
          <div className="vitLogo">VIT LOGO</div>
          <form className="loginForm" onSubmit={forgotSubmit}>
            <h1>Forgot Your Password</h1>
            <p>Get reset link on your mail</p>
            <div className="loginEmail">
              <i className="fa-solid fa-envelope"></i>
              <input
                className="forgotInput"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value={"Send Mail"} className="forgotBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
