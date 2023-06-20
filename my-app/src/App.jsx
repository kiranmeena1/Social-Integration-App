import "./app.css";
import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const App =  () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
   getUser();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={user ?<Navigate to='/home'/>:<Login/>}/>
      <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={user ? <Home/>: <Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default App;
