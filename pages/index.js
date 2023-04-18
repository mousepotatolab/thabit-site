import React, { useEffect } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layout";

import Head from "next/head";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";
// import styles from "@/styles/Home.module.css";

// Images
import first from "../public/first.svg";
import second from "../public/second.svg";
import third from "../public/third.svg";
import fourth from "../public/fourth.svg";
import fifth from "../public/fifth.svg";
import sixth from "../public/sixth.svg";

import arrowRight from "../public/arrowRight.svg";

import verizon from "../public/verizon.svg";
import chain from "../public/chainsmokers.svg";
import aixr from "../public/aixr.svg";
import globle from "../public/globle.svg";
import lalo from "../public/lalo.svg";
import club from "../public/clubfunders.svg";
import risen from "../public/risen.svg";

export default function Home() {
  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("home"));
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
            Run by big kids,
            <br /> but no kidding!
          </h1>
        </motion.div>
        <section id="about-us">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-secondary pt-12 px-20 mb-30">
              <div className="flex justify-between mobile-wrap">
                <div className="max-500">
                  <h3 className="text-2xl font-light mb-6">
                    What is Mouse <br /> Potato Lab?
                  </h3>
                  <p className="text-lg font-light">
                    We are a minimalist <strong>data driven design </strong> and{" "}
                    <strong>development </strong> studio with a love for{" "}
                    <strong>design, coding </strong>and technology!
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
                    src={first}
                    alt="illustration of woman with puzzle pieces"
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="how-we-helped-clients">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-xl font-regular uppercase text-center mb-10">
              How Have We Helped Our Clients
            </h2>
          </motion.div>
          <div className="w-full flex mb-30 mobile-wrap">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary w-full p-10 flex items-end"
            >
              <h3 className="text-2xl font-light">
                Helped raise over $1.4MM in investment
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-tertiary text-secondary w-full p-10 mx-6 mobile-m-0 flex items-end"
            >
              <h3 className="text-2xl font-light mb-8">
                Interview with VCs like Y-Combinator, though they said try again
                next year!
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-secondary w-full p-10 flex items-end"
            >
              <h3 className="text-2xl font-light">
                Products used by hundreds of thousands of users globally
              </h3>
            </motion.div>
          </div>
        </section>
        <section id="we-worked-with">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-xl font-regular uppercase text-center mb-10">
              Companies we have worked with
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full bg-secondary flex mobile-wrap justify-between mobile-justify-center items-center px-13 py-20 mb-30"
          >
            <Image
              className="opacity-60 hover-opacity-100 t-3 mobile-w-full mobile-mb-4"
              src={verizon}
              alt="verizon logo"
              width={90}
            ></Image>
            <Image
              className="opacity-60 hover-opacity-100 t-3 scale-up mobile-w-full mobile-mb-4"
              src={chain}
              alt="chainsmokers logo"
              width={132}
            ></Image>
            <Image
              className="opacity-60 hover-opacity-100 t-3 scale-up mobile-w-full mobile-mb-4"
              src={aixr}
              alt="AIXR logo"
              width={74}
            ></Image>
            <Image
              className="opacity-60 hover-opacity-100 t-3 scale-up mobile-w-full mobile-mb-4"
              src={globle}
              alt="Globle logo"
              width={74}
            ></Image>
            <Image
              className="opacity-60 hover-opacity-100 t-3 scale-up mobile-w-full mobile-mb-4"
              src={lalo}
              alt="Lalo logo"
              width={65}
            ></Image>
            <Image
              className="opacity-60 hover-opacity-100 t-3 scale-up mobile-w-full mobile-mb-4"
              src={club}
              alt="clubfunders logo"
              width={152}
            ></Image>
            <Image
              className="opacity-60 hover-opacity-100 t-3 scale-up mobile-w-full"
              src={risen}
              alt="risen logo"
              width={102}
            ></Image>
          </motion.div>
        </section>
        <section id="about-us-section">
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
                    src={second}
                    alt="illustration of person with a globe"
                  ></Image>
                </motion.div>
                <div className="max-500 relative mb-10 mobile-mb-20">
                  <h3 className="text-2xl font-light mb-6">
                    What do we <br /> do actually?
                  </h3>
                  <p className="text-lg font-light">
                    Our family thinks we just play games and hack things, but we{" "}
                    <strong>design </strong> and{" "}
                    <strong>develop mobile apps, web apps, </strong> websites
                    and landing pages!{" "}
                  </p>
                  <Link href="/contact">
                    <div className="flex absolute y-0 hover-transX pointer">
                      <h5 className="uppercase text-md font-bold mr-2">
                        I have an idea to share
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-secondary pt-12 px-20 mb-30">
              <div className="flex justify-between mobile-wrap">
                <div className="max-500 relative mb-10 mobile-mb-20">
                  <h3 className="text-2xl font-light mb-6">
                    What is our work
                    <br /> process?
                  </h3>
                  <p className="text-lg font-light">
                    We are an <strong>agile team </strong> and we use
                    <strong> design thinking </strong> process to come up with a
                    design solution
                  </p>
                  <Link href="/contact">
                    <div className="flex absolute y-0 hover-transX pointer">
                      <h5 className="uppercase text-md font-bold mr-2">
                        I want to learn more
                      </h5>
                      <Image
                        src={arrowRight}
                        alt="illustration of woman with puzzle pieces"
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
                    src={sixth}
                    alt="illustration of scientist with beakers"
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="we-are-section">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-xl font-regular uppercase text-center mb-6">
              We Are
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex col justify-between items-center mb-30"
          >
            <p className="text-lg font-light text-center max-500 mb-10">
              A company run by a bunch of "big kids" <br /> with a dream bigger
              than the Great GRB Wall!
            </p>
            <a href="/curiosity" target="_blank">
              <button className="button-primary pointer">
                this button is here for no reason
              </button>
            </a>
          </motion.div>
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
                    src={third}
                    alt="illustration of scientist with beakers"
                  ></Image>
                </motion.div>
                <div className="max-500 relative mb-10 mobile-mb-20">
                  <h3 className="text-2xl font-light mb-6">
                    What have we done?
                    <br /> process?
                  </h3>
                  <p className="text-lg font-light">
                    We <strong>designed </strong> and
                    <strong> developed </strong> mobile and web{" "}
                    <strong> apps </strong> that helped solve{" "}
                    <strong>complex problems, </strong> and improved lives!
                  </p>
                  <Link href="/projects">
                    <div className="flex absolute y-0 hover-transX pointer">
                      <h5 className="uppercase text-md font-bold mr-2">
                        Our Projects
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
        <section id="testimonials-section">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-xl font-regular uppercase text-center mb-10">
              What our clients say about us
            </h2>
          </motion.div>
          <div className="w-full flex mb-30 relative mobile-wrap">
            <div className="relative flex w-full hover-revealTest">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-secondary w-full p-10 flex col items-start testimonial"
              >
                <p className="text-lg font-light text-primary mb-6">
                  "We highly recommend Mouse Potato for any design project and
                  continue to work with them now and in the future."
                </p>
                <h5 className="text-lg font-regular text-primary mb-2">
                  Blake Lawrence
                </h5>
                <h6 className="text-md font-light text-primary">
                  Founder @ Clubfunders
                </h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white w-full p-10 shadow-card flex col items-start testimonial absolute z-minus hover-trans-z"
              >
                <p className="text-md font-light text-primary mb-6">
                  "We had the pleasure of working with the geniuses at Mouse
                  Potato on the design of our products. From the start, the team
                  was professional, responsive, and easy to communicate with.
                  They took the time to understand our business goals and
                  created our products that look great and effectively showcase
                  our services and products. We highly recommend Mouse Potato
                  for any design project and continue to work with them now and
                  in the future."
                </p>
                <h5 className="text-lg font-regular text-primary mb-2">
                  Blake Lawrence
                </h5>
                <h6 className="text-md font-light text-primary">
                  Founder @ Clubfunders
                </h6>
              </motion.div>
            </div>
            <div className="relative flex w-full hover-revealTest mx-6 mobile-m-0">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-tertiary text-secondary w-full p-10 flex col items-start testimonial"
              >
                <p className="text-lg font-light text-secondary mb-6">
                  "The entire team at Mouse Potato Lab was incredibly supportive
                  and amazing to work with. They were pivotal when it came to
                  launching my business."
                </p>
                <h5 className="text-lg font-regular text-secondary mb-2">
                  Mallory Delabar
                </h5>
                <h6 className="text-md font-light text-secondary">
                  Founder @ Risen Devices
                </h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white w-full p-10 shadow-card flex col items-start testimonial absolute z-minus hover-trans-z"
              >
                <p className="text-md font-light text-primary mb-6">
                  "The entire team at Mouse Potato Lab was incredibly supportive
                  and amazing to work with. They were pivotal when it came to
                  launching my business. We started with an idea and the team
                  took the time to really think through the best solution. Mouse
                  Potato Lab interviewed experts, designed the app and developed
                  a great platform."
                </p>
                <h5 className="text-lg font-regular text-primary mb-2">
                  Mallory Delabar
                </h5>
                <h6 className="text-md font-light text-primary">
                  Founder @ Risen Devices
                </h6>
              </motion.div>
            </div>
            <div className="relative flex w-full hover-revealTest">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-secondary z-0 w-full p-10 flex col items-start testimonial"
              >
                <p className="text-lg font-light text-primary mb-6">
                  "Mouse Potato Lab is a very talented team, they did an
                  excellent job designing our app and landing page!"
                </p>
                <h5 className="text-lg font-regular text-primary mb-2">
                  Simon Li
                </h5>
                <h6 className="text-md font-light text-primary">
                  Founder @ Globle
                </h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white w-full p-10 shadow-card flex col items-start testimonial absolute z-minus hover-trans-z"
              >
                <p className="text-md font-light text-primary mb-6">
                  "We came to Mouse Potato Lab for a redesign for our app as
                  well as services to design our website. They are a very
                  talented team, they did an excellent job designing our app and
                  landing page! The updated site is a major improvement and we
                  are happy with the final product."
                </p>
                <h5 className="text-lg font-regular text-primary mb-2">
                  Simon Li
                </h5>
                <h6 className="text-md font-light text-primary">
                  Founder @ Globle
                </h6>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="hire-us-section">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-xl font-regular uppercase text-center mb-6">
              Hire us as your tech team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex col justify-between items-center mb-30"
          >
            <p className="text-lg font-light text-center mb-10">
              You can hire us as your team and{" "}
              <strong>save over $100,000 </strong>. A team of 7 <br />
              designers and developers will work on your project!
            </p>
            <Link href="/services#your-team">
              <button className="button-primary pointer">
                how am i saving $100,000?
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-secondary pt-12 px-20 mb-30">
              <div className="flex justify-between mobile-wrap">
                <div className="max-500 relative mb-10 mobile-mb-20">
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
              </div>
            </div>
          </motion.div>
        </section>
        <section id="ready-to-connect">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-xl font-regular uppercase text-center mb-6">
              Why Us Though?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex col justify-between items-center mb-30"
          >
            <p className="text-lg font-light text-center mb-10">
              You can hire us as your team and{" "}
              <strong>save over $100,000 </strong>. A team of 7 <br />
              designers and developers will work on your project!
            </p>
            <Link href="/contact">
              <button className="button-primary pointer">
                now ready to connect?
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full  pt-12 px-20 mb-30">
              <div className="flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, x: -80, y: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  // animate={{ x: 100, y: -100 }}
                >
                  <Image
                    src={fifth}
                    alt="illustration of a baseball player"
                    width={440}
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
