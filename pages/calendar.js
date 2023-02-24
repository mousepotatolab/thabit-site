import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/layout";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../src/features/activePageSlice";

//images
import arrowRight from "../public/arrowRight.svg";
import fourth from "../public/fourth.svg";

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

export default function Calendar() {
  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("calendar"));
  });

  const date = new Date();
  const day = date.toISOString().split("T")[0].split("-")[2];
  const month = date.toLocaleString("default", { month: "short" });

  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | Calendar" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta property="og:url" content="https://www.mousepotato.co/calendar" />
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
            Our Projects
            <br /> In the making
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-secondary p-10 mb-30 max-h-500 max-660">
            <div className="flex justify-between">
              <div className="max-450 relative">
                <h3 className="text-2xl font-light mb-6">Next Availability</h3>
                <p className="text-lg font-light mb-6">
                  We would love to know about your project. Feel free to drop us
                  a line.
                </p>
                <button className="button-contact">contact us</button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // animate={{ x: 100, y: -100 }}
              >
                <div className="bg-dark-grey p-6">
                  <h5 className="text-2xl font-bold text-primary">{day}</h5>
                  <h5 className="text-lg font-bold text-primary uppercase">
                    {month}
                  </h5>
                </div>
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
          <div className="w-full bg-secondary p-10 mb-30 max-h-500 max-660">
            <div className="flex justify-between">
              <div className="max-500 relative">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Jan 16, 2023 - Ongoing
                </h6>
                <h3 className="text-2xl font-light mb-6">Topio</h3>
                <p className="text-md font-light mb-6">
                  AIXR - The Academy of International Extended Reality is a
                  thriving membership community for VR/AR, Realtime & Web3
                  businesses internationally, where you can connect with other
                  leaders, develop your skills, and be heard. At a time when
                  great immersive companies have never been more important, the
                  academy offers professional development, valuable connections,
                  and influence.
                </p>
                <ul className="flex mobile-block">
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UX Research
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UI Design
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Landing Page Design
                  </li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // animate={{ x: 100, y: -100 }}
              >
                <div className="bg-dark-grey p-6"></div>
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
          <div className="w-full bg-secondary p-10 mb-30 max-h-500 max-660">
            <div className="flex justify-between">
              <div className="max-500 relative">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Aug 20, 2022 - Ongoing
                </h6>
                <h3 className="text-2xl font-light mb-6">AIXR</h3>
                <p className="text-md font-light mb-6">
                  AIXR - The Academy of International Extended Reality is a
                  thriving membership community for VR/AR, Realtime & Web3
                  businesses internationally, where you can connect with other
                  leaders, develop your skills, and be heard. At a time when
                  great immersive companies have never been more important, the
                  academy offers professional development, valuable connections,
                  and influence.
                </p>
                <ul className="flex mobile-block">
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UX Research
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UI Design
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Web App Development
                  </li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // animate={{ x: 100, y: -100 }}
              >
                <div className="bg-dark-grey p-6"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
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
                <div className="max-500 mobile-mb-20 relative mb-10">
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

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
