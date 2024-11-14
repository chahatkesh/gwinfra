import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-[90%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
