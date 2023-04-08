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

export default function Risen() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Case Study - Risen Devices</title>
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
            Risen Devices
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative risen-hero m-auto mb-6"
          // animate={{ x: 100, y: -100 }}
        >
          <Image
            loader={cloudflareLoader}
            src="/dafa2388-8f06-4bfc-4df6-ce65ac34d200"
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
              Risen Devices
            </h5>
            <h6 className="text-grey text-20 font-light mb-6">Overview</h6>
            <div className="flex w-full">
              <div className="min-280 mr-20">
                <h3 className="text-2xl font-light mb-4 w-full">Scope</h3>
                <ul>
                  <li className="text-lg font-light">UX Research</li>
                  <li className="text-lg font-light">UI Design</li>
                  <li className="text-lg font-light">Development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4 w-full">Key Metrics</h3>
                <ul>
                  <li className="text-lg font-light">
                    Web app and website launched
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
          className="w-full max-1000 m-auto mb-10"
        >
          <div className="bg-white p-20 min-h-500">
            <h6 className="text-grey text-20 font-light mb-6">Problem</h6>
            <div className="flex w-full">
              <p className="text-2xl font-light">
                People are open to getting the wrong medical treatment if they
                are unable to communicate their preexisting medical conditions
                to medical professionals during an emergency
              </p>
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
                Design and develop a web app that allows a user to create a
                medical profile and connect it with a physical wearable devices.
                In an emergency situation, medical providers can scan the device
                and retrieve important information
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
              src="/451bec4f-627f-4839-4473-18aca98b3000"
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
          className="w-full max-1000 m-auto mt-132 mb-10 relative z-plus flex"
        >
          <div className="bg-white min-h-500 flex mobile-wrap">
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
                  src="/1fc9dcbd-7837-42aa-28eb-c14e61aa2300"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">
                Empathy Stage
              </h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                User Interview
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We interviewed EMT members, a captain of a fire department, a
                  hospital nurse and a few emergency room nurses to understand
                  their needs and struggles
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
          className="w-full max-1000 m-auto mb-10 relative z-plus flex"
        >
          <div className="bg-white min-h-500 flex mobile-wrap-reverse">
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">
                Empathy Stage
              </h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                User Persona
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We created 4 user personas to capture all the potential ideal
                  user types
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
                  src="/161bd03c-4867-4a4e-2dbe-f36eb9240000"
                  fill
                ></Image>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-1000 m-auto mb-10 relative z-plus"
        >
          <div className="bg-white p-20 min-h-500">
            <h6 className="text-grey text-20 font-light mb-6">Ideation</h6>
            <h6 className="text-2xl text-primary mb-4 font-light">
              Ideation Session
            </h6>
            <div className="flex w-full">
              <p className="text-lg font-light">
                After identifying the problem statement, we had ideation
                sessions with our project stakeholders. We came upon the
                solution to have QR code bands that a medical professional can
                scan to retrieve medical information from a mobile dashboard
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
              src="/17f3c8c7-d94d-4417-0d1b-ba8b6dd37300"
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
          className="w-full max-1000 m-auto mb-10  mt-132 relative z-plus flex"
        >
          <div className="bg-white min-h-500 flex mobile-wrap">
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
                  src="/d01c6916-6b42-4d17-cce0-7cc040ec4c00"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">
                Empathy Stage
              </h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                Identifying MVP Features
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We used an impact/effort matrix to identify MVP features
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
          className="w-full max-1000 m-auto mb-10 relative z-plus flex"
        >
          <div className="bg-white min-h-500 flex mobile-wrap-reverse">
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">Prototype</h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                Wireframe
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We came up with two different wireframe solutions. We ran an
                  A/B test to determine what was optimal
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
                  src="/451bec4f-627f-4839-4473-18aca98b3000"
                  fill
                ></Image>
              </motion.div>
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
          <div className="bg-white min-h-500 flex mobile-wrap">
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
                  src="/3820d342-84f2-40ce-5b50-f5a15eeab100"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">Prototype</h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                User Test
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We ran two rounds of user tests with 15 users. We tested both
                  potential solutions and chose the one with the best success
                  rate
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
          <div className="bg-white min-h-500 flex mobile-wrap-reverse">
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">Prototype</h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                UI Design
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We used a parallel design technique to come up with multiple
                  solutions. We merged them into a final wireframe
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
                  src="/64c242c9-8dad-4bc5-52ba-e9accdf01400"
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

Risen.getLayout = function getLayout(page) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
