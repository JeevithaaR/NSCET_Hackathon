import React from "react";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";
function Layout({children}) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
