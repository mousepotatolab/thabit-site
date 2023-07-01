import React, { useEffect } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Layout from "@/components/layout";

import Head from "next/head";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

// Images
import puzzle from "../public/puzzle.svg";
import aliens from "../public/aliens.svg";
import fourth from "../public/fourth.svg";
import third from "../public/third.svg";

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
            <div className="bg-secondary p-10 w-full mb-20">
              <div className="flex justify-between mobile-wrap">
                <div className="w-full">
                  <h5 className="text-lg font-bold text-primary mb-2">
                    Price Based On Project Type
                  </h5>

                  <div className="flex items-center mb-10">
                    <h6 className="text-xs font-light">
                      Initial deposit to start, and then payments after each
                      milestone is complete
                    </h6>
                  </div>
                  <div className="flex w-full mobile-wrap">
                    <div className="w-full">
                      <h6 className="text-md font-bold text-primary mb-2 mw-280">
                        Web App
                      </h6>
                      <p className="text-md font-light text-primary mb-4 mw-280">
                        Full Stack web app development with Node.js, Next.js
                      </p>
                    </div>
                    <div className="ml-10 mobile-m-0 w-full">
                      <h6 className="text-md font-bold text-primary mb-2 mw-280">
                        Landing Page
                      </h6>
                      <p className="text-md font-light text-primary mb-4 mw-280">
                        Landing Page design and development
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full mobile-wrap">
                    <div className="w-full">
                      <h6 className="text-md font-bold text-primary mb-2 mw-280">
                        Mobile App
                      </h6>
                      <p className="text-md font-light text-primary mb-4 mw-280">
                        Full stack hybrid mobile app development using React
                        Native{" "}
                      </p>
                    </div>
                    <div className="w-full">
                      <h6 className="text-md font-bold text-primary mb-2 mw-280 mobile-ml-0 ml-10">
                        Logo Design
                      </h6>
                      <p className="text-md font-light text-primary mb-4 mw-280 mobile-ml-0 ml-10">
                        In House logo designer will create a custom logo
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full mobile-wrap mb-10">
                    <div className="w-full">
                      <h6 className="text-md font-bold text-primary mb-2 mw-280">
                        Website
                      </h6>
                      <p className="text-md font-light text-primary mb-4 mw-280">
                        Multiple page website for your business. Strapi for CMS
                        as well as Static site development
                      </p>
                    </div>
                    <div className="w-full">
                      <h6 className="text-md font-bold text-primary mb-2 mw-280 mobile-ml-0 ml-10">
                        Branding
                      </h6>
                      <p className="text-md font-light text-primary mb-4 mw-280 mobile-ml-0 ml-10">
                        Brand Identity guides, logo design and custom
                        illustrations for marketing
                      </p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <button className="button-startup mobile-mb-20">
                      tell us about your project
                    </button>
                  </Link>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  // animate={{ x: 100, y: -100 }}
                  className="flex w-full justify-center items-center"
                >
                  <Image
                    src={puzzle}
                    alt="illustration of scientist with beakers"
                  ></Image>
                </motion.div>
              </div>
            </div>
            {/* <div className="w-full bg-secondary pt-12 mobile-p-8 px-20 mb-20">
              <div className="flex justify-between mobile-wrap">
                <div className="max-500 relative mb-10 mobile-mb-20">
                  <h3 className="text-2xl font-light mb-6">
                    Ready to talk <br /> to us?
                  </h3>
                  <p className="text-lg font-light">
                    Do you feel like <strong>talking </strong> to us? Do you
                    want to tell us about the
                    <strong> problem </strong> you want to solve or the
                    <strong> project </strong> that you are working on?
                  </p>
                  <Link href="/contact">
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
                  </Link>
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
            </div> */}
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
            <div className="w-full bg-secondary pt-12 px-20 mobile-p-8 mb-20">
              <div className="flex justify-between mobile-wrap">
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
            <div className="flex w-full justify-between mb-20 mobile-wrap">
              {/* <div className="bg-secondary p-10 w-full">
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
                  Frontend Engineer
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
                <Link href="/contact">
                  <button className="button-contact">contact us</button>
                </Link>
              </div>
              <div className="bg-secondary p-10 w-full mx-15 mobile-m-0 mobile-my-4">
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
                  Frontend Engineer
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
                <Link href="/contact">
                  <button className="button-contact">contact us</button>
                </Link>
              </div> */}
              <div className="bg-secondary p-10 w-full">
                <div className="flex justify-between mobile-wrap">
                  <div className="w-full">
                    <h5 className="text-lg font-bold text-primary mb-2">
                      Monthly Plan
                    </h5>

                    <div className="flex items-center mb-10">
                      <h6 className="text-2xl font-bold text-primary mr-1">
                        $15,000
                      </h6>
                      <p className="text-xs text-grey">/per month</p>
                    </div>
                    <div className="flex w-full mobile-wrap">
                      <div>
                        <h6 className="text-md font-bold text-primary mb-2 mw-280">
                          Product Designer
                        </h6>
                        <p className="text-md font-light text-primary mb-4 mw-280">
                          UX/UI design team with one senior designer
                        </p>
                      </div>
                      <div className="ml-10 mobile-m-0">
                        <h6 className="text-md font-bold text-primary mb-2 mw-280">
                          Project Manager
                        </h6>
                        <p className="text-md font-light text-primary mb-4 mw-280">
                          Dedicated project Manager
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full mobile-wrap">
                      <div className="w-full">
                        <h6 className="text-md font-bold text-primary mb-2 mw-280">
                          Front-end Engineer
                        </h6>
                        <p className="text-md font-light text-primary mb-4 mw-280">
                          Frontend team with one senior front-end engineer
                        </p>
                      </div>
                      <div className="w-full">
                        <h6 className="text-md font-bold text-primary mb-2 mw-280 mobile-ml-0 ml-10">
                          Graphics Designer
                        </h6>
                        <p className="text-md font-light text-primary mb-4 mw-280 mobile-ml-0 ml-10">
                          Dedicated graphics designers for custom logo and
                          illustrations
                        </p>
                      </div>
                    </div>

                    <h6 className="text-md font-bold text-primary mb-2 mw-280">
                      Back-end Engineer
                    </h6>
                    <p className="text-md font-light text-primary mb-10 mw-280">
                      Backend team with one senior back-end engineer
                    </p>

                    <Link href="/contact">
                      <button className="button-contact mobile-mb-20">
                        contact us
                      </button>
                    </Link>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    // animate={{ x: 100, y: -100 }}
                    className="flex w-full justify-center items-center"
                  >
                    <Image
                      src={third}
                      alt="illustration of scientist with beakers"
                    ></Image>
                  </motion.div>
                </div>
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
              <div className="flex justify-between mobile-wrap-reverse">
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
                <div className="max-500 relative mb-10 mobile-mb-20">
                  <h3 className="text-2xl font-light mb-6">
                    Ready to talk <br /> to us?
                  </h3>
                  <p className="text-lg font-light">
                    Talk to us to<strong> learn </strong> more about how
                    <strong> hiring </strong> us as your
                    <strong> team </strong> works!
                  </p>
                  <Link href="/contact">
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
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

Services.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
