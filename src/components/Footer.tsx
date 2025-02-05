import React from "react";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const LINKS = [
  { href: "#", icon: <FaDiscord /> },
  { href: "#", icon: <FaTwitter /> },
  { href: "#", icon: <FaGithub /> },
  { href: "#", icon: <FaTwitch /> },
];
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; 2023 Zentry. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {LINKS.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
