import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./SideBar";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <Header />
      <div
        className="flex flex-grow bg-gray-800"
        style={{ marginBottom: "4rem" }}
      >
        <main
          className="flex-grow bg-gray-800 p-4"
          style={{ marginRight: "8rem lg:10rem ", paddingBottom: "7rem" }}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
      <NavBar />
    </div>
  );
}
