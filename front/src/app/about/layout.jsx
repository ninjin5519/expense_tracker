"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const fetchCurrentUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:8008/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  console.log("user", userData);
  return (
    <div>
      <div>
        <p>{userData?.user?.name} </p>
        <img src="/images/Vector.png" alt="" />
        <h3>Dashboard</h3>
        <p>Records</p>
      </div>
      <span className="ml-2 text-blue-700">+ Record</span>
      {children}
    </div>
  );
};

export default Layout;
