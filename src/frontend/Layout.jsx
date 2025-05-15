import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHashElement from "./components/ScrollToHashElement";

export default function Layout() {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
