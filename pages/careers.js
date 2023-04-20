import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import Link from "next/link";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

export default function Careers() {
  const CurrentYear = new Date().getFullYear();

  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("home"));
  });

  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Careers</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | Careers" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta property="og:url" content="https://www.mousepotato.co/careers" />
        <meta
          property="og:image"
          content="https://i.ibb.co/1LvG4xh/ogImage.jpg"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZB4BX6WH03', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <div className="container m-auto mb-10">
        <main className="container">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=""
          >
            <h1 className="text-title font-bold uppercase text-primary mb-20">
              Careers
            </h1>

            <h2 className="text-2xl font-light mb-6">Join Mouse Potato Lab</h2>

            <h3 className="text-lg font-light mb-30">
              Sorry we are not hiring right now
            </h3>
          </motion.div>
        </main>
      </div>
    </>
  );
}

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
