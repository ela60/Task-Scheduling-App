import { Outlet } from "react-router";

import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";
import TaskBoard from "../component/TaskBoard";

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
          Welcome Mrs. {user?.displayName} 🐦‍🔥. Lets unleash the power of
          PicSeek-AI
        </Marquee>
      )}
      <header className="bg-gradient-to-t lg:bg-gradient-to-l from-cyan-100 ">
        <nav className="md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="min-h-[calc(100svh-125px)]">
        <Outlet></Outlet>
      </main>

      <TaskBoard/>

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
