import logo from "../utils/const/final logo.png"
import emoji from "../utils/const/sign_out_final.png"
import React from "react";
import { signOut , onAuthStateChanged} from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser ,removeUser} from "../utils/userSlice";


const Header = () => {
  const  dispatch=useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
}).catch((error) => { 
  navigate("/error");
  // An error happened.
});
  };

  useEffect(()=>{ 
   const unsubscribe= onAuthStateChanged(auth, (user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/auth.user
const {uid,email,displayName,photoURL} = user;


dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

navigate("/browse");
// ...
} else {
dispatch(removeUser());
navigate("/");
// User is signed out
// ... 
}
});


//unsubscribe when the component unmounts
return ()=> unsubscribe();
},[]);


  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-950 flex justify-between">
      <img className=" mx-2  w-[350px] " src={logo} />
      {user && <div className="py-8 px-10 ">
        <img src={emoji} className=" w-16 h-30 rounded-lg"/>
        <button onClick={handleSignOut} className="  text-red-600 font-bold hover:underline cursor-pointer">Sign Out</button>
  
      </div>
}
    </div>
    
  );
};

export default Header;