import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./SideBar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <Header />
      <div
        className="flex flex-grow bg-gray-800"
        style={{ marginBottom: "4rem" }}
      >
        <main
          className="flex-grow bg-gray-800 p-4"
          style={{ marginRight: "8rem lg:10rem " }}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
      <NavBar />
    </div>
  );
};

export default Layout;
