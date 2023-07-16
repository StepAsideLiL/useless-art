import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="py-4 text-center">
      <p className="text-slate-500">Useless Art &copy; {year}</p>
      <p className="text-slate-500">
        Made by{" "}
        <Link
          href="http://stepasidelil.web.app/"
          className="text-black border-b-2 border-b-transparent hover:border-b-black"
        >
          Rifat Khan
        </Link>
      </p>
    </div>
  );
};

export default Footer;
