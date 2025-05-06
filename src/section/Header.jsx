import React, { useState } from "react";
import Logo from "../assets/logo.svg?react";
import Menu from "../assets/icon-menu.svg?react";
import Close from "../assets/icon-close.svg?react";
import { Link } from "react-router-dom";
import WaitlistModal from "../component/Button";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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

            {/* Desktop nav */}
            <div className="hidden md:block">
              <nav className="flex gap-8 text-white/70 text-sm">
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
                <Link to="/blogs" className="hover:text-white transition">
                  Blogs
                </Link>
                <Link to="/developer" className="hover:text-white transition">
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
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 rounded-lg text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0_0_12px_#8c45ff] overflow-hidden cursor-pointer"
              >
                Join Waitlist
              </button>

              {/* Mobile menu toggle */}
              <button onClick={handleMenuToggle} className="md:hidden">
                {isMenuOpen ? (
                  <Close className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-sm text-center py-4 space-y-4">
              <Link
                onClick={handleLinkClick}
                to="/"
                className="block text-white/80 hover:text-white"
              >
                Home
              </Link>
              <Link
                onClick={handleLinkClick}
                to="/blogs"
                className="block text-white/80 hover:text-white"
              >
                Blogs
              </Link>
              <Link
                onClick={handleLinkClick}
                to="/developer"
                className="block text-white/80 hover:text-white"
              >
                Developers
              </Link>
              <Link
                onClick={handleLinkClick}
                to="/pricing"
                className="block text-white/80 hover:text-white"
              >
                Pricing
              </Link>
              <Link
                onClick={handleLinkClick}
                to="/changelog"
                className="block text-white/80 hover:text-white"
              >
                Changelog
              </Link>
            </div>
          )}
        </div>
      </header>

      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
