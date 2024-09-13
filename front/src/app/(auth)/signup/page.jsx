"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [image, setImage] = useState(null);
  const handleImageUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "byurziwm");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Aldaa garlaa");
    }
  };
  const signUp = async () => {
    // const imageUrl = await handleImageUpload();
    // if (!imageUrl) return;

    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8008/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.status === 201) {
        // toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };
  return (
    <div className="flex">
      <div className="w-1/2 h-full flex flex-col items-center justify-center m-auto gap-10">
        <img className="w-[93px], h-[34px]" src="/images/Geld.png" alt="" />
        <div className="text-center">
          <h1 className="text-2xl font-semibold"> Create Geld account</h1>
          <p className="text-base font-normal">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered w-full max-w-xs"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
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
          <input
            type="text"
            placeholder="Re-Password"
            class="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setUserData({ ...userData, repassword: e.target.value })
            }
          />

          <button class="btn btn-primary w-full max-w-xs" onClick={signUp}>
            Sign up
          </button>
        </div>
        <div>
          <span>Already have account?</span>
          <Link href="/login">
            <button className="btn btn-link">Log in</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-blue-600"></div>
    </div>
  );
};

export default SignUpPage;
