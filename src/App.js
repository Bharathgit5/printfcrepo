import React,{useState,useEffect}from 'react'
import Home from './Home'
import {Routes, Route} from "react-router-dom";
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { auth } from "./firebase";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
     
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
    
   </>
   
  );
}

export default App;