import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div className="container">
      <h1 className="h1 signIn">Sign In</h1>
      <div className="Allforms">
        {error !== null && <div className = "">{error}</div>}
        <form className="forms">
          <label htmlFor="userEmail" className="blockEmail">
            Email:
          </label>
          <input
            type="email"
            className=""
            name="userEmail"
            value = {email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className=""
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="button" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="">or</p>
        <button
          className="buttonGoogle"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="Links">
          <p>Don't have an account?{" "}</p>
          <Link to="signUp" className="buttonAnother">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" className="buttonAnother">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
