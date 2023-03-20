import Image, { ImageLoader } from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";

import ThemeToggle from "./themeToggle";

import logo from "../public/logo.svg";

import { useSelector } from "react-redux";

import { useState } from "react";

export default function Navbar() {
  let activePage = useSelector((state) => state.activePage.value);

  console.log(activePage);

  const [isOpenMobileNav, setOpenMobileNav] = useState(false);
  const [isClosedMobileNav, setCloseMobileNav] = useState(true);
  const [isDisplayed, setDisplay] = useState(true);
  function toggleMobileNav() {
    setOpenMobileNav(!isOpenMobileNav);

    setCloseMobileNav(!isClosedMobileNav);
    setDisplay(false);
  }

  return (
    <div className="flex w-full m-auto justify-between container mt-10">
      <Link href="/">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="logo-main mb-20 relative">
            <Image src={logo} alt="Mouse Potato Lab Logo" fill></Image>
          </div>
        </motion.div>
      </Link>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <nav className="desktop-nav">
          <ul className="flex items-center">
            <Link href="/projects">
              <li
                className={`${
                  activePage === "projects" ? "nav-item-active" : "nav-item"
                } uppercase font-regular mr-10`}
              >
                Projects
              </li>
            </Link>
            <Link href="/services">
              <li
                className={`${
                  activePage === "services" ? "nav-item-active" : "nav-item"
                } uppercase font-regular mr-10`}
              >
                Services
              </li>
            </Link>
            <Link href="/calendar">
              <li
                className={`${
                  activePage === "calendar" ? "nav-item-active" : "nav-item"
                } uppercase font-regular mr-10`}
              >
                Calendar
              </li>
            </Link>
            <Link href="/resources">
              <li
                className={`${
                  activePage === "resources" ? "nav-item-active" : "nav-item"
                } uppercase font-regular mr-10`}
              >
                Resources
              </li>
            </Link>
            <Link href="/contact">
              <li
                className={`${
                  activePage === "contact" ? "nav-item-active" : "nav-item"
                } uppercase font-regular mr-10`}
              >
                Contact
              </li>
            </Link>
            <ThemeToggle />
          </ul>
        </nav>
        {!isOpenMobileNav && (
          <div onClick={toggleMobileNav} className="mobile-nav-toggle">
            <div className="top-line"></div>
            <div className="bottom-line"></div>
          </div>
        )}
        {isOpenMobileNav && (
          <div onClick={toggleMobileNav} className="mobile-nav-toggle">
            <div className="top-line-white"></div>
            <div className="bottom-line-white"></div>
          </div>
        )}
        {isOpenMobileNav && (
          <nav className="mobile-nav">
            <ul className="flex items-center mobile-nav">
              <Link href="/projects">
                <li
                  onClick={toggleMobileNav}
                  className={`${
                    activePage === "projects" ? "nav-item-active" : "nav-item"
                  } uppercase font-regular mb-4`}
                >
                  Projects
                </li>
              </Link>
              <Link href="/services">
                <li
                  onClick={toggleMobileNav}
                  className={`${
                    activePage === "services" ? "nav-item-active" : "nav-item"
                  } uppercase font-regular mb-4`}
                >
                  Services
                </li>
              </Link>
              <Link href="/calendar">
                <li
                  onClick={toggleMobileNav}
                  className={`${
                    activePage === "calendar" ? "nav-item-active" : "nav-item"
                  } uppercase font-regular mb-4`}
                >
                  Calendar
                </li>
              </Link>
              <Link href="/resources">
                <li
                  onClick={toggleMobileNav}
                  className={`${
                    activePage === "resources" ? "nav-item-active" : "nav-item"
                  } uppercase font-regular mb-4`}
                >
                  Resources
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={toggleMobileNav}
                  className={`${
                    activePage === "contact" ? "nav-item-active" : "nav-item"
                  } uppercase font-regular mb-4`}
                >
                  Contact
                </li>
              </Link>
              <ThemeToggle />
            </ul>
          </nav>
        )}
      </motion.div>
    </div>
  );
}
