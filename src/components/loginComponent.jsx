import React, { useState } from "react";
import BaseURL from '../BaseURL';
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        fetch(`${BaseURL}login`, {
            method: "POST",
            mode: "no-cors",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status == "ok") {
                    window.localStorage.setItem("token", data.data);
                    toast.success("Login successful");
                    navigate('/details')
                } else if (data.msg == "Incorrect credentials ") {
                    toast.error("Invalid email or password")
                } else {
                    toast.error("Not registered, please register!");
                    navigate('/signup')
                }
            });

    }



    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            console.log(auth?.currentUser?.email);
            window.localStorage.setItem("token", auth.data);
            navigate('/details')
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <>
            <div className="loginbox">
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>

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
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Not registered?  <a href="/signup">Sign Up</a>
                    </p>

                </form>
                <button onClick={signInWithGoogle}>Sign In with google</button>

            </div>
        </>

    );
}

