import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import Link from "next/link";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

export default function Game() {
  const CurrentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Curiosity</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | Curiosity" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta
          property="og:url"
          content="https://www.mousepotato.co/curiostiy"
        />
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
              Curiosity kills the cat, <br /> but humans learn things!
            </h1>

            <h2 className="text-2xl font-light mb-6">
              What is Great GRB Wall?
            </h2>

            <p className="text-lg font-light mb-6">
              We copied it from Wikipedia
            </p>

            <div className="text-lg font-light mb-6">
              Hercules–Corona Borealis Great Wall or the Great GRB Wall is the
              largest known structure in the observable universe, measuring
              approximately 10 billion light years in length (for perspective,
              the observable universe is about 93 billion light years in
              diameter). This massive superstructure is a region of the sky seen
              in the data set mapping of gamma-ray bursts (GRBs) that has been
              found to have an unusually higher concentration of similarly
              distanced GRBs than the expected average distribution. It was
              discovered in early November 2013 by a team of American and
              Hungarian astronomers led by István Horváth, Jon Hakkila and Zsolt
              Bagoly while analyzing data from the Swift Gamma-Ray Burst
              Mission, together with other data from ground-based telescopes. It
              is the largest known formation in the universe, exceeding the size
              of the prior Huge-LQG by about two times.
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}

Game.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
