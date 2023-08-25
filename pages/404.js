import React, { useEffect } from "react";

import Image from "next/image";

import lab from "../public/sixth.svg";

import SuccessLayout from "@/components/successLayout";

import ThemeToggle from "@/components/themeToggle";

import { useAnimation, motion } from "framer-motion";

import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3500);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full mt-10 flex items-center col justify-center container m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          // animate={{ x: 100, y: -100 }}
        ></motion.div>
        <h1 className="text-xl mb-30 max-660">
          404
          <br />
          You have reached a page that does not exist. Check the url for issues.
          Maybe we are in the lab working on this page
        </h1>
      </div>
    </motion.div>
  );
}
PageNotFound.getLayout = function getLayout(page) {
  return <SuccessLayout>{page}</SuccessLayout>;
};
