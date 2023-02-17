import Image, { ImageLoader } from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";

import ThemeToggle from "./themeToggle";

import logo from "../public/logo.svg";

import { useSelector } from "react-redux";

export default function Navbar() {
  let activePage = useSelector((state) => state.activePage.value);

  console.log(activePage);

  return (
    <div className="flex w-full m-auto justify-between container mt-10">
      <Link href="/">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="logo-main mb-20">
            <Image
              src={logo}
              alt="Mouse Potato Lab Logo"
              width={150}
              height={150}
            ></Image>
          </div>
        </motion.div>
      </Link>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <nav className="">
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
      </motion.div>
    </div>
  );
}
