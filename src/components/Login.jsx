import React from "react";
import Header from "./Header.jsx";
import { useState,useRef} from "react";
import checkValidData from "../utils/validate.jsx";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import auth from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import bg_final from "../utils/const/new_bg.jpg";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const dispatch = useDispatch();


  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message=checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
    displayName: "name.current.value", photoURL: "https://avatars.githubusercontent.com/u/148896965?v=4"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch
    (addUser(
      {uid:uid,
      email:email,
      displayName:displayName,
      photoURL:photoURL}));

      // Profile updated!
      // ...
    }).catch((error) => {
      setErrorMessage(errorMessage);
  // An error occurred
  // ...
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage); 
  });

    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
    if(errorCode === "auth/invalid-credential") {
      setErrorMessage("Invalid Email or Password");
    }
  });


    }

  };
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen">
        <img className="relative w-full h-screen object-cover mix-blend-overlay" src={bg_final} alt="backgroung_img" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
      className="absolute w-3/12 p-8 bg-black my-52 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-600 font-bold text-lg py-2 ">{errorMessage}</p>
        <button
         className="p-4 my-6 w-full text-gray-900 bg-gradient-to-r from-red-700 via-red-600 to-yellow-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-500 dark:focus:ring-gray-600 font-bold rounded-lg text-m   text-center me-2 mb-2"
         onClick={handleButtonClick}>          
        
          <h1 className="font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
        </button>
        <p
          className="py-4 cursor-pointer font-style: non-italic hover:italic"
          onClick={toggleSignIn}
        >
          {" "}
          {isSignInForm
            ? "New to FlixNow ? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;