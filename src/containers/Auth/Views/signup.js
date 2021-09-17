import { React, useState, useEffect } from "react";
import styles from "./style.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signup } from "../Request";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async(e) =>{
    e.preventDefault()
      if (!email || !password || !name) {
          toast.error("Please fill all required fields");
          return
      } else {
          let payload = {
              name:name,
              email:email,
              password:password
          }
          let data = await signup(payload);
          if(!data)
          return;
          if(data.error){
          toast.error(data.message || 'Something went wrong');
          }else {
              toast.success("Signup Successful.Please login to continue");
              resetFields();
              redirectToLogin();
          }

      }

  }

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  console.log("a");
  return (
    <div className="root">
      <ToastContainer />
      <div className="loginCtr">
        <div className="loginHeader">
          <h2>Register</h2>
        </div>
        <div className="loginForm">
          
          <form>
            <div className="form-group" id="formItem">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group" id="formItem">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group" id="formItem">
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
              <button type="submit" className="btn btn-primary" onClick={(e)=>onSubmit(e)}>
                Sign Up
              </button>
            </div>
          </form>

          <div className="bottomText">
            <div>Already have an account?</div>
            <Link className="link" to="/login">
              <div className="redirectText">LOGIN</div>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
