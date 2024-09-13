"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const LogInPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const logIn = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post(`http://localhost:8008/auth/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };
  return (
    <div className="flex">
      <div className="w-1/2 h-full flex flex-col items-center justify-center m-auto gap-10">
        <img className="w-[93px], h-[34px]" src="/images/Geld.png" alt="" />
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Welcome Back</h1>
          <p className="text-base font-normal">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button class="btn btn-primary w-full max-w-xs " onClick={logIn}>
            Log in{" "}
          </button>
        </div>
        <div>
          <span>Don't have account?</span>
          <Link href="/signup">
            <button className="btn btn-link">Sign up</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-blue-600"></div>
    </div>
  );
};
export default LogInPage;
