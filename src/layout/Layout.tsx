import React, { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutInterface {
  children: ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <React.Fragment>
        <main className="page-wrapper" id="layout-wrapper">
          <Header />
          {children}
          <Footer />
        </main>
      </React.Fragment>
    </>
  );
};

export default Layout;
