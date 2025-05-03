import React from "react";
import Logo from "../assets/logo.svg?react";
import Menu from "../assets/icon-menu.svg?react";
import { Link } from "react-router-dom";
import Button from "../component/Button";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 text-white md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur md:hidden -z-10"></div>
      <div className="py-6">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-3xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur hidden -z-10 md:block"></div>
          <div>
            <div className="border h-10 w-10 border-white/15 rounded-lg inline-flex items-center justify-center">
              <Logo className="w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-white/70 text-sm">
              <Link to="/features" className="hover:text-white transition">
                Features
              </Link>
              <Link to="/developers" className="hover:text-white transition">
                Developers
              </Link>
              <Link to="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
              <Link to="/changelog" className="hover:text-white transition">
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join Waitlist</Button>
            <Menu className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
