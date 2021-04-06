import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/145/145802.svg?token=exp=1617308614~hmac=fe64eaf568b54353f74d22f776026972"
          alt=""
        />
        <img
          src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png"
          alt=""
          className="login__logotext"
        />
        <Button className="button" type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
