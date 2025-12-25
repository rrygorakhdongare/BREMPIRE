import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Page Content */}
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
