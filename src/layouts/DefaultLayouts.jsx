import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen w-full bg-base-100 text-base-content">
      <Navbar />
      <main className="w-full min-h-screen">
  {/* Section full width */}

        <Outlet />
      </main>
      <Footer />
    </div>
  );
}