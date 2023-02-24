import React, { useEffect } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectLayout from "@/components/projectLayout";

import ThemeToggle from "@/components/themeToggle";

import Head from "next/head";
import Image from "next/image";

const normalizeSrc = (src) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `https://imagedelivery.net/reln_0zNmr7GUlRvuYhFXw/${normalizeSrc(
    src
  )}/public`;
};
// import styles from "@/styles/Home.module.css";

// Images
import first from "../../public/first.svg";
import second from "../../public/second.svg";
import third from "../../public/third.svg";
import fourth from "../../public/fourth.svg";
import fifth from "../../public/fifth.svg";
import sixth from "../../public/sixth.svg";

import arrowRight from "../../public/arrowRight.svg";

import verizon from "../../public/verizon.svg";
import chain from "../../public/chainsmokers.svg";
import aixr from "../../public/aixr.svg";
import globle from "../../public/globle.svg";
import lalo from "../../public/lalo.svg";
import club from "../../public/clubfunders.svg";
import risen from "../../public/risen.svg";

import { useRouter } from "next/router";

export default function Verizon() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Case Study - Verizon AR Experience</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta
          property="og:title"
          content="Mouse Potato Lab | App Design and Development Studio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta
          property="og:url"
          content="https://www.mousepotato.co/projects/lalo"
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
      <main className="m-auto bg-projects">
        <div className="flex justify-between w-full container m-auto pt-8">
          <Link href="/projects">
            <div className="container m-auto">
              <div className="flex hover-transX-minus pointer mb-10 ">
                <Image
                  src={arrowRight}
                  alt="illustration of woman with puzzle pieces"
                  className="arrow flip mr-2"
                ></Image>
                <h5 className="uppercase text-md font-bold ">
                  Back to Projects
                </h5>
              </div>
            </div>
          </Link>
          <ThemeToggle></ThemeToggle>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-title text-center font-bold uppercase text-primary mb-6">
            Verizon AR <br />
            Experience
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lalo-hero m-auto mb-6"
          // animate={{ x: 100, y: -100 }}
        >
          <Image
            loader={cloudflareLoader}
            src="/39ebb2c0-3994-4378-0428-72619be48800"
            fill
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-1000 m-auto mb-10"
        >
          <div className="bg-white p-20 min-h-500">
            <h5 className="text-primary font-light uppercase text-lg mb-20">
              Verizon AR Experience
            </h5>
            <h6 className="text-grey text-20 font-light mb-6">Overview</h6>
            <div className="flex w-full">
              <div className="min-280 mr-20">
                <h3 className="text-2xl font-light mb-4 w-full">Scope</h3>
                <ul>
                  <li className="text-lg font-light">UX Research</li>
                  <li className="text-lg font-light">UI Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4 w-full">Key Metrics</h3>
                <ul>
                  <li className="text-lg font-light">
                    App launched for Coachella Arts Festival
                  </li>
                  <li className="text-lg font-light">
                    Successful test of Verizon 5g technology with attendees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-1000 m-auto relative z-plus"
        >
          <div className="bg-white p-20 min-h-500">
            <h6 className="text-grey text-20 font-light mb-6">Objective</h6>
            <div className="flex w-full">
              <p className="text-2xl font-light">
                Design an app for Coachella Valley Arts Festival attendees to
                experience augmented reality using Verizon 5G
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute project-preview m-auto mb-6"
            // animate={{ x: 100, y: -100 }}
          >
            <Image
              loader={cloudflareLoader}
              src="/9fdd2de2-9573-44a0-8892-fdd53e50de00"
              fill
              className="project-minus"
            ></Image>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-1000 m-auto mb-10 mt-132 relative z-plus"
        >
          <div className="bg-white p-20 min-h-500">
            <h6 className="text-grey text-20 font-light mb-6">Ideation</h6>
            <h6 className="text-2xl text-primary mb-4 font-light">
              Ideation Session
            </h6>
            <div className="flex w-full">
              <p className="text-lg font-light">
                Through our ideation session we came up with 5 unique solution
                options for the app. Our goal was to find a solution that meets
                all of Verizon's design guidelines and also capture the visual
                theme of The Chainsmokers band
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-1000 m-auto mb-10 relative z-plus flex"
        >
          <div className="bg-white min-h-500 flex">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative m-auto project-item"
                // animate={{ x: 100, y: -100 }}
              >
                <Image
                  loader={cloudflareLoader}
                  src="/cea47b54-8ce1-4dc5-ac30-50a558b01a00"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">Prototype</h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                Wireframe
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We created 3 different wireframes to vizualize potential
                  solutions from our original 5 concepts
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-1000 m-auto pb-10 relative z-plus flex"
        >
          <div className="bg-white min-h-500 flex">
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">Prototype</h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                UI Design
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We used bright colors and illustrations to ensure the app felt
                  warm, fun and modern.
                </p>
              </div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative m-auto project-item"
                // animate={{ x: 100, y: -100 }}
              >
                <Image
                  loader={cloudflareLoader}
                  src="/30506a19-689e-421b-ce24-a26c4157bd00"
                  fill
                ></Image>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

Verizon.getLayout = function getLayout(page) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
