import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";
import Link from "next/link";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

export default function About() {
  const CurrentYear = new Date().getFullYear();

  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("home"));
  });

  return (
    <>
      <Head>
        <title>Mouse Potato Lab | About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | About Us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta property="og:url" content="https://www.mousepotato.co/about-us" />
        <meta
          property="og:image"
          content="https://i.ibb.co/1LvG4xh/ogImage.jpg"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "hitk43rj4w");
            `,
          }}
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
              About <br />
              Us
            </h1>

            <p className="text-xl font-normal mb-6">
              Welcome to <b>Mouse Potato Lab</b>, a mobile and web{" "}
              <b>app design and development</b> studio based in California that
              <b> specializes</b> in working with <b>early stage startups.</b>
            </p>
            <p className="text-xl font-normal mb-30">
              At Mouse Potato Lab, we use a{" "}
              <b>data-driven and design thinking approach</b> to guide our
              creative process. By leveraging data and insights, we are able to
              make <b>informed design decisions</b> that prioritize user needs
              and achieve our clients' business objectives. We believe that{" "}
              <b>good design</b> is more than <b>just aesthetics</b> - it's
              about <b>creating solutions</b> that are intuitive, user-friendly,
              and effective.
            </p>

            <h2 className="text-2xl font-light mb-20 text-center">Our Team</h2>
            <div className="flex justify-between w-full mb-10 max-1070 m-auto">
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Auvik M.</h6>
                <p className="text-md uppercase">Founder & CEO</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Matthew B.</h6>
                <p className="text-md uppercase">Co-Founder & COO</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Emrul H.</h6>
                <p className="text-md uppercase">Senior Backend Engineer</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Habib P.</h6>
                <p className="text-md uppercase">Front-end Engineer</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Thuhidul I.</h6>
                <p className="text-md uppercase">UX/UI Designer</p>
              </div>
            </div>
            <div className="flex justify-between w-full max-844 m-auto mb-30">
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Hasnur A.</h6>
                <p className="text-md uppercase">UX/UI Designer</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Arsip s.</h6>
                <p className="text-md uppercase">Business Development</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">John P.</h6>
                <p className="text-md uppercase">Logo Designer</p>
              </div>
              <div className="flex col w-full items-center potato-employee">
                <div className="box-placeholder mb-6"></div>
                <h6 className="text-lg uppercase mb-2">Karolina S.</h6>
                <p className="text-md uppercase">Graphics Designer</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
