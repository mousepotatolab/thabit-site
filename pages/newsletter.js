import React, { useEffect } from "react";

import Image from "next/image";

import fifth from "../public/fifth.svg";

import { useAnimation, motion } from "framer-motion";

import SuccessLayout from "@/components/successLayout";

import ThemeToggle from "@/components/themeToggle";

import { useRouter } from "next/router";

export default function Newsletter() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.back(), 3500);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ThemeToggle></ThemeToggle>
      <div className="w-full mt-10 flex items-center col justify-center container m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          // animate={{ x: 100, y: -100 }}
        >
          <Image
            className="max-420  max-h-420"
            src={fifth}
            alt="illustration of a baseball player"
          ></Image>
        </motion.div>
        <h1 className="text-xl mb-30 max-660">
          Thank you for joining our newsletter! Something special will arrive in
          your inbox every Friday. You can unsusbscribe any time
        </h1>
      </div>
    </motion.div>
  );
}

Newsletter.getLayout = function getLayout(page) {
  return <SuccessLayout>{page}</SuccessLayout>;
};
