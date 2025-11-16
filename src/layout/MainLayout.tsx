import { Outlet } from "react-router-dom";
import Footer from "../core/Footer";
import Navbar from "../core/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
