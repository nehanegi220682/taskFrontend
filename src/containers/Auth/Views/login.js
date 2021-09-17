import { React, useState, useEffect } from "react";
import styles from "./style.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../Request";
import { checkAuthorized } from "../../../utils";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async(e) => {
    e && e.preventDefault()
      if (!email || !password) {
          toast.error("Please fill all required fields");
          return
      } else {
          let payload = {
              email: email,
              password: password
          }
          let data = await login(payload);
          console.log("data in return is",data)
          if(!data)
          return;
          if(data.error){
          toast.error(data.message || 'Something went wrong');
          }else {
              toast.success(data.message || "Login Successful.");
              resetFields();
              redirectToDashboard();
          }
      }
  }

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };
  const redirectToDashboard = () => {
    window.location.href = "/home";
  };

  useEffect(async() => {
   let { authenticated } = await checkAuthorized();
   if(authenticated)
   window.location.href = '/home'
  }, [])


  return (
    <div className="root">
      <ToastContainer />
      <div className="loginCtr">
        <div className="loginHeader">
          <h2>Login</h2>
        </div>
        <div className="loginForm">
         
          <form>
            <div className="form-group" id='formItem'>
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group" id='formItem'>
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submitBtn">
            <button type="submit" className="btn btn-primary"onClick={(e) => onSubmit(e)} >
              Login
            </button>
            </div>
          </form>

          <div className="bottomText">
            <div>Don't have an account?</div>
            <Link className="link" to="/signup">
              <div className="redirectText">SIGN UP NOW</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
