import Footer from "@/components/sections/main-footer/Footer";
import Navbar from "@/components/sections/main-header/Navbar";
import React from "react";

type HomeLayoutProp = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProp) => {
  return (
    <section>
      <Navbar />

      {children}

      <Footer />
    </section>
  );
};

export default HomeLayout;
