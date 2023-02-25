import React, { useEffect, useState } from "react";
import BaseURL from "../BaseURL";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../config/firebase";




export default function UserDetails() {
   const navigate = useNavigate();
   const [info, setInfo] = useState("")

   useEffect(() => {
      fetch(`${BaseURL}details`,{
         method: "POST",
         crossDomain: true,
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
            token: window.localStorage.getItem("token"),
         }),
      })
         .then((res) => res.json())
         .then((data) => {

               console.log(data[0], "userData");
               setInfo(data[0])

               if (data[0] == null) {
                  console.log(auth?.currentUser?.email);
                  navigate('/details')
               }

               else if (data.data === "token expired") {
                  window.localStorage.clear();
                  toast.error("Token expired login again");
                  navigate('/')
               }
            
         });
   }, []);


   const logOut = () => {
      window.localStorage.clear();
      toast.success("Logged Out")
      navigate('/')
   };


   return (
      <div className="user-details">
         <h1>Dashboard</h1>
         {info ? (
            <div className="info">
               <p>Hey, {info.Name}!</p>
               <p> Welcome to Dashboard</p>
               <p>Name: {info.Name}</p>
               <p>Age: {info.Age}</p>
               <p>Email: {info.Email}</p>
               <p>Address: {info.Address}</p>
            </div>
         ) : (
            <div className="info">
            <p>Hey, {auth?.currentUser?.email}!</p>
            <p> Welcome to Dashboard</p>
            <p>LoggedIn as:  {auth?.currentUser?.email}</p>
            </div>
         )}
         <button onClick={logOut}>Log Out</button>
      </div>
   );
}