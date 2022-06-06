import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Notice from "./pages/Notice";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { auth } from './firebase';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { setCookie,getCookie,deleteCookie  } from './cookie';

function App() {

  const [is_login, setIsLogin]=useState(false);


  console.log(auth.currentUser);
  const loginCheck= async (user)=>{
    if(user){
      setIsLogin(true)
    }
    else{
      setIsLogin(false)
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth,loginCheck)
  },[])

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/detail' element={<Detail/>} />
      <Route path='/sign' element={<Signup/>} />
      <Route path='/notice' element={<Notice/>} />
      <Route path='/post' element={<Post/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  );
}

export default App;
