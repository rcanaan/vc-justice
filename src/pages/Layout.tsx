import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./SideBar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow" style={{ marginBottom: "4rem" }}>
        <main
          className="flex-grow bg-gray-100 p-4"
          style={{ marginRight: "12rem" }}
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
