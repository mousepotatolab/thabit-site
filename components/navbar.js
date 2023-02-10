import Image, { ImageLoader } from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";

import ThemeToggle from "./themeToggle";

import logo from "../public/logo.svg";

export default function Navbar() {
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
              <li className="uppercase font-regular mr-10">Projects</li>
            </Link>
            <Link href="/services">
              <li className="uppercase font-regular mr-10">Services</li>
            </Link>
            <Link href="/calendar">
              <li className="uppercase font-regular mr-10">Calendar</li>
            </Link>
            <Link href="/resources">
              <li className="uppercase font-regular mr-10">Resources</li>
            </Link>
            <Link href="/contact">
              <li className="uppercase mr-30 font-regular">Contact</li>
            </Link>
            <ThemeToggle />
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
