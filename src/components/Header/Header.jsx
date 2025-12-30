import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/Logo.png";
import {
  RiMenu5Fill,
  RiCloseLine,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramFill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);
  const [animateInfo, setAnimateInfo] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      // Delay animations for staggered effect
      setTimeout(() => {
        setAnimateLinks(true);
      }, 300);
      setTimeout(() => {
        setAnimateInfo(true);
      }, 500);
    } else {
      document.body.style.overflow = "unset";
      setAnimateLinks(false);
      setAnimateInfo(false);
    }
  }, [isSidebarOpen]);

  const navItems = [
    { name: "Home", path: "/", id: "home" },
    { name: "Service", path: "service", id: "service" },
    { name: "About Us", path: "about", id: "about" },
    { name: "Contact", path: "contact", id: "contact" },
  ];

  const handleScrollToSection = (e, id) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      // Navigate to home page with hash
      window.location.href = `/#${id}`;
      setIsSidebarOpen(false);
      return;
    }

    // If we're already on home page, scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsSidebarOpen(false);
  };

  const handleSidebarClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Header - Appears when scrolling */}
      <div
        className={`fixed bg-black top-0 left-0 w-full h-20 flex items-center p-4 lg:p-8 z-50 transition-all duration-500 ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between w-full px-10">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-12">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white font-medium relative group text-lg"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[0.5] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white text-2xl lg:text-3xl hover:scale-110 transition-transform duration-200"
          >
            <RiMenu5Fill />
          </button>
        </div>
      </div>

      {/* Initial Header - Disappears when scrolling */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl h-20 bg-white/20 backdrop-blur-lg rounded-full px-4 lg:px-8 z-40 transition-all duration-500 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-between h-full w-full">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-12">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white font-medium relative group text-lg"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[0.5] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white text-2xl lg:text-3xl hover:scale-110 transition-transform duration-200"
          >
            <RiMenu5Fill />
          </button>
        </div>
      </div>

      {/* Side Navigation Bar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full lg:w-full bg-linear-to-br from-black to-gray-900 text-white z-50 transition-all duration-700 ease-in-out transform ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        onClick={handleSidebarClick}
      >
        {/* Close button at top right */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute hidden lg:block top-6 right-6 lg:top-8 lg:right-8 text-white text-3xl hover:scale-110 transition-transform duration-200 z-10"
        >
          <RiCloseLine />
        </button>

        {/* Desktop Layout - Split Screen */}
        <div className="hidden lg:flex h-full w-full">
          {/* Left Side - Navigation Links (40% width) */}
          <div className="w-2/5 h-full flex items-center justify-center relative">
            {/* Margin Line in the center */}
            <div className="absolute right-0 top-0 h-full w-px bg-white/20"></div>

            <ul className="space-y-12 pl-12">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block text-7xl font-bold relative group py-2 transition-all duration-700 ${
                      animateLinks
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Company Info (60% width) */}
          <div className="w-3/5 h-full flex items-center justify-center p-12">
            <div
              className={`max-w-2xl w-full transition-all duration-700 ${
                animateInfo
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            >
              <div className="space-y-16">
                {/* Logo at top */}
                <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                  <img src={Logo} alt="Logo" className="h-16 w-auto mb-8" />
                </Link>

                {/* Headquarters */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                    Headquarters
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    MMR COMPLEX,
                    <br />
                    SALEM, Tamil Nadu 636008
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                    Social Media
                  </h3>
                  <div className="flex space-x-8">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-3xl transition-colors duration-300"
                    >
                      <RiFacebookFill />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-3xl transition-colors duration-300"
                    >
                      <RiTwitterFill />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-3xl transition-colors duration-300"
                    >
                      <RiLinkedinFill />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-3xl transition-colors duration-300"
                    >
                      <RiInstagramFill />
                    </a>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                    Contact Us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@thestackly.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300 block text-lg"
                    >
                      info@thestackly.com
                    </a>
                    <a
                      href="tel:+917010792745"
                      className="text-gray-400 hover:text-white transition-colors duration-300 block text-lg"
                    >
                      +91 70107 92745
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Keep previous design */}
        <div className="lg:hidden h-full overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-3xl hover:scale-110 transition-transform duration-200"
            >
              <RiCloseLine />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="p-6">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-2xl font-medium relative group block py-2"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-2 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info for Mobile */}
          <div className="p-6 border-t border-white/10 mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">
                Contact Us
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:info@thestackly.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 block text-sm"
                >
                  info@thestackly.com
                </a>
                <a
                  href="tel:+917010792745"
                  className="text-gray-400 hover:text-white transition-colors duration-300 block text-sm"
                >
                  +91 70107 92745
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                >
                  <RiLinkedinFill />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                >
                  <RiInstagramFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-500"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};
