import React from "react";
import Logo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import XSocial from "../assets/social-x.svg?react";
import InstaSocial from "../assets/social-instagram.svg?react";
import YtSocial from "../assets/social-youtube.svg?react";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-t-white/30">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="h-8 w-8" />
            <h3>AI Startup Landing Page</h3>
          </div>

          <nav className="flex gap-6 text-white/70 text-md flex-col lg:flex-row lg:gap-8 lg:flex-1 lg:justify-center">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <Link to="/developer" className="hover:text-white transition">
              Developers
            </Link>
            <Link to="/blogs" className="hover:text-white transition">
              Blogs
            </Link>
            <Link to="/company" className="hover:text-white transition">
              Company
            </Link>
            <Link to="/changelog" className="hover:text-white transition">
              Changelog
            </Link>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white" />
            <InstaSocial className="text-white/40 hover:text-white" />
            <YtSocial className="text-white/40 hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
