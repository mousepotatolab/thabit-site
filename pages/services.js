import React, { useEffect } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Head from "next/head";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

// Images
import puzzle from "../public/puzzle.svg";
import aliens from "../public/aliens.svg";
import fourth from "../public/fourth.svg";

import arrowRight from "../public/arrowRight.svg";

export default function Services() {
  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("services"));
  });

  return (
    <>
      <Head>
        <title>Mouse Potato Lab | App Design and Development Studio</title>
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
        <meta property="og:url" content="https://www.mousepotato.co/projects" />
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
      <main className="container m-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-title font-bold uppercase text-primary mb-20">
            Fixed Cost
            <br /> Projects
          </h1>
        </motion.div>
        <section id="fixed-cost">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-secondary pt-12 px-20 mb-20">
              <div className="flex justify-between">
                <div className="max-500 relative mb-10">
                  <h3 className="text-2xl font-light mb-6">
                    Ready to talk to us?
                    <br /> process?
                  </h3>
                  <p className="text-lg font-light">
                    Do you fell like <strong>talking </strong> to us? Do you
                    want to tell us about the
                    <strong> problem </strong> you want to solve or the
                    <strong> project </strong> that you are working on?
                  </p>
                  <div className="flex absolute y-0 hover-transX pointer">
                    <h5 className="uppercase text-md font-bold mr-2">
                      I want to connect
                    </h5>
                    <Image
                      src={arrowRight}
                      alt="icon right arrow"
                      className="arrow"
                    ></Image>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  // animate={{ x: 100, y: -100 }}
                >
                  <Image
                    src={puzzle}
                    alt="illustration of woman with puzzle pieces"
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="your-team">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-title font-bold uppercase text-primary mb-20">
              Hire Us As
              <br /> Your Team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-secondary pt-12 px-20 mb-20">
              <div className="flex justify-between">
                <div className="max-500 relative mb-10">
                  <h3 className="text-2xl font-light mb-6">
                    Save at least <br /> $100,000 a year!
                  </h3>
                  <p className="text-lg font-light">
                    One <strong>senior designer </strong> and one
                    <strong> senior engineer </strong> will cost you a minimum
                    <strong> $250,000</strong> a year plus benefits, if you can
                    find ones that are available!
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  // animate={{ x: 100, y: -100 }}
                >
                  <Image
                    src={aliens}
                    alt="illustration alien spaceships"
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex w-full justify-between mb-20">
              <div className="bg-secondary p-10 w-full">
                <h5 className="text-lg font-bold text-primary mb-2">
                  Yearly Contract
                </h5>
                <p className="text-sm font-light text-primary mb-10">
                  Paid every three months
                </p>
                <div className="flex items-center mb-10">
                  <h6 className="text-2xl font-bold text-primary mr-1">
                    $10,000
                  </h6>
                  <p className="text-xs text-grey">/per month</p>
                </div>
                <h6 className="text-md font-bold text-primary mb-2">
                  Product Designer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  UX/UI design team with one senior designer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Frontend Engineerr
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Frontend team with one senior frontend engineer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Backend Engineer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Backend team with one senior backend engineer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Graphics Designer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Dedicated graphics designers for custom illustrations, logos
                  and graphics
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Project Manager
                </h6>
                <p className="text-md font-light text-primary mb-10">
                  Dedicated project Manager
                </p>
                <button className="button-contact">contact us</button>
              </div>
              <div className="bg-secondary p-10 w-full mx-15">
                <h5 className="text-lg font-bold text-primary mb-2">
                  Six Month Contract
                </h5>
                <p className="text-sm font-light text-primary mb-10">
                  Paid evey two months
                </p>
                <div className="flex items-center mb-10">
                  <h6 className="text-2xl font-bold text-primary mr-1">
                    $12,000
                  </h6>
                  <p className="text-xs text-grey">/per month</p>
                </div>
                <h6 className="text-md font-bold text-primary mb-2">
                  Product Designer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  UX/UI design team with one senior designer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Frontend Engineerr
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Frontend team with one senior frontend engineer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Backend Engineer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Backend team with one senior backend engineer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Graphics Designer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Dedicated graphics designers for custom illustrations, logos
                  and graphics
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Project Manager
                </h6>
                <p className="text-md font-light text-primary mb-10">
                  Dedicated project Manager
                </p>
                <button className="button-contact">contact us</button>
              </div>
              <div className="bg-secondary p-10 w-full">
                <h5 className="text-lg font-bold text-primary mb-2">
                  Monthly Contract
                </h5>
                <p className="text-sm font-light text-primary mb-10">
                  Paid monthly
                </p>
                <div className="flex items-center mb-10">
                  <h6 className="text-2xl font-bold text-primary mr-1">
                    $15,000
                  </h6>
                  <p className="text-xs text-grey">/per month</p>
                </div>
                <h6 className="text-md font-bold text-primary mb-2">
                  Product Designer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  UX/UI design team with one senior designer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Frontend Engineerr
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Frontend team with one senior frontend engineer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Backend Engineer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Backend team with one senior backend engineer
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Graphics Designer
                </h6>
                <p className="text-md font-light text-primary mb-4">
                  Dedicated graphics designers for custom illustrations, logos
                  and graphics
                </p>
                <h6 className="text-md font-bold text-primary mb-2">
                  Project Manager
                </h6>
                <p className="text-md font-light text-primary mb-10">
                  Dedicated project Manager
                </p>
                <button className="button-contact">contact us</button>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="ready-to-connect">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-secondary pt-12 px-20 mb-30">
              <div className="flex justify-between">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  // animate={{ x: 100, y: -100 }}
                >
                  <Image
                    src={fourth}
                    alt="illustration of scientist with beakers"
                  ></Image>
                </motion.div>
                <div className="max-500 relative mb-10">
                  <h3 className="text-2xl font-light mb-6">
                    Ready to talk <br /> to us?
                  </h3>
                  <p className="text-lg font-light">
                    Talk to use to<strong> learn </strong> more about how
                    <strong> hiring </strong> us as your
                    <strong> team </strong> works!
                  </p>
                  <div className="flex absolute y-0 hover-transX pointer">
                    <h5 className="uppercase text-md font-bold mr-2">
                      I want to connect
                    </h5>
                    <Image
                      src={arrowRight}
                      alt="illustration of woman with puzzle pieces"
                      className="arrow"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
