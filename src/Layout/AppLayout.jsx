import { Outlet } from "react-router";

import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";
import TaskBoard from "../component/TaskBoard";
import Banner from "../component/Banner";
import AboutPage from "../component/AboutPage";

const AppLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && user?.email && (
        <Marquee
          pauseOnHover={true}
          gradient={true}
          className="bg-primary text-base-100"
        >
          Welcome 🐦  {user?.displayName} . 📌 "Effortless Task Management for a Smarter Workflow!"
        </Marquee>
      )}
      <header className="bg-gradient-to-t lg:bg-gradient-to-b from-cyan-200 ">
        <nav className="md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>

      <Banner/>

      <main className="">
        <Outlet></Outlet>
      </main>
      <AboutPage/>

      {user && user?.email && (
      <TaskBoard/>
    )}
      <Footer/>

      {/* <footer className="footer footer-center bg-cyan-50 glass text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer> */}
    </>
  );
};

export default AppLayout;
