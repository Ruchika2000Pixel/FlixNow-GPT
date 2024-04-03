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

const handleGPTSearchClick=()=>
{
  //Toggle GPT Search 
}


  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-950 flex justify-between">
      <img className=" mx-2  w-[350px] " src={logo} />
      {user &&
       <div className="flex md:justify-end">
<button type="button" 
class="text-white
 bg-gradient-to-br from-purple-950 via-purple-700 to-gray-800
 hover:bg-gradient-to-bl 
  font-medium  rounded-lg text-lg px-6 py-4 h-16 my-6 text-center me-2 mb-2"
  onClick={handleGPTSearchClick}> 
GPT Search
 </button > 
 <span>    
  <img src={emoji} alt="usericon"  className=" mx-8 mt-4 w-18 h-20 rounded-lg"/>
        <button onClick={handleSignOut} className=" ml-8 text-white font-medium  text-lg hover:underline cursor-pointer">Sign Out</button>
        </span>
      </div>
}
    </div>
    
  );
};

export default Header;