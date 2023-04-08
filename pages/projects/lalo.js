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

export default function Lalo() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Case Study - Lalo, A Place to Remember</title>
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
            Lalo
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
            src="/58258e0b-cdb7-4547-38e0-6a7b57250400"
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
              Lalo
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
                    App and Website launched
                  </li>
                  <li className="text-lg font-light">Raised over $300,000</li>
                  <li className="text-lg font-light">
                    Interview with Y-Combinator
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
                No organized way to preserve and share the memory of our lost
                loved ones
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
                Design and develop a native mobile app to capture and preserve
                the memory of loved ones that have passed away
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
              src="/bbd4b5ff-53b8-4e13-33b0-07e915ad2400"
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
                  src="/b58cc497-d8f8-464d-8477-a197d8397200"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20 mobile-project">
              <h6 className="text-grey text-20 font-light mb-6">
                Empathy Stage
              </h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                User Interview
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We conducted 14 user interviews. One of our goals was to
                  validate the problem. We sought to tease out the problems that
                  our users had
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
                Storyboard
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We generated storyboards to share the problem and its
                  potential solution to all of our stakeholders
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
                  src="/2987f308-5dd9-4c6f-a24e-0988bfd36a00"
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
                  src="/34f7fec4-f9d9-41d7-1f4c-bf97f95d4500"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">
                Empathy Stage
              </h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                User Persona
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  We created 3 user personas to capture the characteristics of
                  our ideal users and their motivations
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
          className="w-full max-1000 m-auto mb-10 relative z-plus"
        >
          <div className="bg-white p-20 min-h-500">
            <h6 className="text-grey text-20 font-light mb-6">Ideation</h6>
            <div className="flex w-full">
              <p className="text-2xl font-light">
                After identifying the problem statement we had ideation sessions
                with all stakeholders. Through the session we determined what
                would be an ideal solution to solve the problem
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
                  src="/40c5338a-e8da-404a-d2d9-ed4c52580300"
                  fill
                ></Image>
              </motion.div>
            </div>
            <div className="p-20">
              <h6 className="text-grey text-20 font-light mb-6">Ideation</h6>
              <h6 className="text-primary text-2xl font-light mb-6">
                Identifying MVP Features
              </h6>
              <div className="flex w-full">
                <p className="text-lg font-light">
                  After a NUF test we used our Project Goal Radar board to
                  visually understand which ideas directly solve the problem
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
                  src="/9c0b0e25-60a5-4e99-cf2b-5c468cd9dc00"
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
              src="/e55522b3-f690-40bb-f65e-04a50b5c7800"
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
                  src="/0e0410b4-efde-4547-2228-6120ed0d0f00"
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
                  We ran three rounds of user testing with ~20 users. We
                  identified some usability issues and went through iterations.
                  Our final user test had a 95% success rate
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
                  src="/6d56a03c-6fe2-4a17-709f-ec2f22bcc500"
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

Lalo.getLayout = function getLayout(page) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
