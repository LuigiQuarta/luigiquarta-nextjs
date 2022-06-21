import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({children}: PageProps) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default Page;
