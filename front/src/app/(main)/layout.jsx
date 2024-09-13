"use client";

import { Header } from "../components/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-[#F3F4F6] h-screen">{children}</main>
    </div>
  );
};

export default Layout;
