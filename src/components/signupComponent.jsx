import React, { useState } from "react";
import BaseURL from '../BaseURL'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {
   const navigate = useNavigate()
   const [name, setname] = useState("");
   const [age, setage] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [address, setaddress] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      // console.log(name, age, email, password, address);
      fetch(`${BaseURL}register`, {
         method: "POST",
         crossDomain: true,
      
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
            name,
            age,
            email,
            password,
            address,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data, "userRegister");
            if (data.affectedRows >0 ) {
               toast.success("Registration Successful");
               navigate('/')
            } else {
               toast.error("User already registered");
               navigate('/')
            }
         });

   };


   return (
      <form onSubmit={handleSubmit}>
         <h3>Sign Up</h3>


         <div className="mb-3">
            <label>Name</label>
            <input
               type="text"
               className="form-control"
               placeholder="Name"
               onChange={(e) => setname(e.target.value)}
            />
         </div>

         <div className="mb-3">
            <label>Age</label>
            <input
               type="text"
               className="form-control"
               placeholder="Age"
               onChange={(e) => setage(e.target.value)}
            />
         </div>

         <div className="mb-3">
            <label>Email address</label>
            <input
               type="email"
               className="form-control"
               placeholder="Enter email"
               onChange={(e) => setEmail(e.target.value)}
            />
         </div>

         <div className="mb-3">
            <label>Password</label>
            <input
               type="password"
               className="form-control"
               placeholder="Enter password"
               onChange={(e) => setPassword(e.target.value)}
            />
         </div>
         <div className="mb-3">
            <label>Address</label>
            <input
               type="text"
               className="form-control"
               placeholder="Enter address"
               onChange={(e) => setaddress(e.target.value)}
            />
         </div>

         <div className="d-grid">
            <button type="submit" className="btn btn-primary">
               Sign Up
            </button>
         </div>
         <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
         </p>
      </form>
   );
}
