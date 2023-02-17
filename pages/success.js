import React, { useEffect } from "react";

import Image from "next/image";

import aliens from "../public/aliens.svg";

import { useAnimation, motion } from "framer-motion";

import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 333500);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full m-minus flex items-center col justify-center container m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          // animate={{ x: 100, y: -100 }}
        >
          <Image src={aliens} alt="illustration alien spaceships"></Image>
        </motion.div>
        <h1 className="text-xl mb-30 max-660">
          Your message was submitted successfully! One of our team members will
          get back to you soon.
        </h1>
      </div>
    </motion.div>
  );
}
