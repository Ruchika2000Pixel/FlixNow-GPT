import logo from "../utils/const/final logo.png"
import React from "react";
import { signOut , onAuthStateChanged} from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser ,removeUser} from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { SUPPORTED_LANGUAGES } from "../utils/const/constants";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const  dispatch=useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user);
  const showGPTSearch= useSelector((store)=>store.gpt.showGPTSearch);
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
  dispatch(toggleGPTSearchView());
};

const handleLanguageChange = (e) => {
 //console.log(e.target.value) ;
 dispatch(changeLanguage(e.target.value));
};


  return (
    <div className=" w-screen absolute bg-gradient-to-b from-gray-950 flex justify-between">
      <img className=" ml-2   w-[350px] " src={logo} />
      {user &&
       <div className="flex md:justify-end">
        {showGPTSearch && (<select 
        onChange={handleLanguageChange}
        className="p-2 text-lg font-medium mx-8 my-8 w-32 h-16 rounded-lg bg-gradient-to-br  from-gray-800 via-gray-500 to-gray-700 hover:bg-gradient-to-bl bg-gray-800 text-white">
          {SUPPORTED_LANGUAGES.map(lang =><option key={lang.identifier} value={lang.identifier}>  {lang.name}  </option>)}


        </select>
        )}
<button  
className="text-white
 bg-gradient-to-br from-purple-950 via-purple-700 to-gray-800
 hover:bg-gradient-to-bl 
  font-medium  rounded-xl text-lg px-4 py-2 h-16 my-8 text-center me-2 mb-2 cursor-pointer "
  onClick={handleGPTSearchClick}> 
      {showGPTSearch ? "HomePage":"GPT Search"}
 </button > 

 <button
              onClick={() => {
                handleSignOut();
                setShowNavItems(false);
              }}
              className="group flex items-center justify-evenly rounded-lg md:justify-start md:w-16 md:h-16 my-8 bg-gradient-to-br from-red-800 to-red-900 via-red-600 md:rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg md:hover:w-32 w-[112px] h-6 hover:rounded-xl hover:bg-gradient-to-bl   active:translate-x-1 active:translate-y-1 mx-6"
            >
              <div className="flex items-center justify-center md:w-full md:transition-all md:duration-300 md:group-hover:justify-start md:group-hover:px-3">
                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="md:absolute md:right-5 md:transform md:translate-x-full md:opacity-0 text-white text-lg md:font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Logout
              </div>
            </button>

      </div>
}
    </div>
    
  );
};

export default Header;