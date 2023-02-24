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
import Link from "next/link";

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

export default function Projects() {
  const dispatch = useDispatch();

  let activePage = useSelector((state) => state.activePage.value);

  useEffect(() => {
    dispatch(setActivePage("projects"));
  });
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
        <meta property="og:title" content="Mouse Potato Lab | Case Studies" />
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
            Most Recent
            <br /> Projects
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-secondary pt-12 mobile-p-8 pl-20 mb-30 max-h-500">
            <div className="flex justify-between mobile-wrap">
              <div className="max-500 relative mobile-mb-20">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Web App
                </h6>
                <h3 className="text-2xl font-light mb-6">AIXR</h3>
                <p className="text-lg font-light mb-6">
                  AIXR is a thriving membership community for VR/AR, Realtime &
                  Web3 businesses internationally
                </p>
                <ul className="flex mobile-block mobile-mb-20">
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
                <div className="flex absolute y-0 hover-transX pointer mb-10">
                  <h5 className="uppercase text-md font-bold mr-2">
                    Learn More
                  </h5>
                  <Image
                    src={arrowRight}
                    alt="illustration of woman with puzzle pieces"
                    className="arrow"
                  ></Image>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aixr"
                // animate={{ x: 100, y: -100 }}
              >
                <Image
                  loader={cloudflareLoader}
                  src="/ddfcc0bb-3d87-43f6-4e9b-991e83773900"
                  fill
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
          <div className="w-full bg-secondary pt-12 pl-6 mobile-p-8 pr-20 mb-30 max-h-500">
            <div className="flex justify-between mobile-justify-end mobile-wrap-reverse">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // animate={{ x: 100, y: -100 }}
                className="relative club"
              >
                <Image
                  loader={cloudflareLoader}
                  src="/c4984668-29ce-4037-d750-a49aa95ad400"
                  fill
                  className="club"
                ></Image>
              </motion.div>
              <div className="max-500 relative mobile-mb-20">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Mobile App
                </h6>
                <h3 className="text-2xl font-light mb-6">Clubfunders</h3>
                <p className="text-lg font-light mb-6">
                  Powering payments between brands, sports clubs and athletes
                </p>
                <ul className="flex mobile-block mobile-mb-20">
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Branding
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UX Research
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Ui Design
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Website Development
                  </li>
                </ul>
                <div className="flex absolute y-0 hover-transX pointer mb-10">
                  <h5 className="uppercase text-md font-bold mr-2">
                    Learn More
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-secondary  pl-20 mobile-p-8 mb-30 max-h-500">
            <div className="flex justify-between mobile-wrap">
              <div className="max-500 relative pt-12 mobile-pt-0 mobile-mb-20">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Mobile App
                </h6>
                <h3 className="text-2xl font-light mb-6">Lalo</h3>
                <p className="text-lg font-light mb-6">
                  Capture and preserve the memory of our loved ones
                </p>
                <ul className="flex mobile-block mobile-mb-20">
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UX Research
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UI Design
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Landing Page Development
                  </li>
                </ul>
                <Link href="/projects/lalo">
                  <div className="flex absolute y-0 hover-transX pointer mb-10">
                    <h5 className="uppercase text-md font-bold mr-2">
                      Learn More
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
                className="relative lalo"
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-secondary pt-12 pl-6 mobile-p-8 pr-20 mb-30 max-h-500">
            <div className="flex justify-between  mobile-justify-end mobile-wrap-reverse">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // animate={{ x: 100, y: -100 }}
                className="relative risen"
              >
                <Image
                  loader={cloudflareLoader}
                  src="/27415cef-b642-4297-8e04-faf660f07d00"
                  fill
                ></Image>
              </motion.div>
              <div className="max-500 relative mobile-mb-20">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Web App
                </h6>
                <h3 className="text-2xl font-light mb-6">Risen Devices</h3>
                <p className="text-lg font-light mb-6">
                  Get proper help in an emergency medical situation{" "}
                </p>
                <ul className="flex mobile-block mobile-mb-20">
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Branding
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UX Research
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Ui Design
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    Web App Development
                  </li>
                </ul>
                <Link href="/projects/risen">
                  <div className="flex absolute y-0 hover-transX pointer mb-10">
                    <h5 className="uppercase text-md font-bold mr-2">
                      Learn More
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
          <div className="w-full bg-secondary  pl-20 mobile-p-8 mb-30 max-h-500">
            <div className="flex justify-between mobile-wrap">
              <div className="max-500 relative pt-12 mobile-pt-0 mobile-mb-20">
                <h6 className="text-md font-regular text-primary uppercase mb-2">
                  Mobile App
                </h6>
                <h3 className="text-2xl font-light mb-6">
                  Verizon AR Experience
                </h3>
                <p className="text-lg font-light mb-6">
                  Experience augmented reality using Verizon 5G
                </p>
                <ul className="flex mobile-block mobile-mb-20">
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UX Research
                  </li>
                  <li className="mobile-max-c mobile-mb-4 text-xs bg-light-grey p-tag br-2 font-bold text-black mr-4">
                    UI Design
                  </li>
                </ul>
                <Link href="/projects/verizon">
                  <div className="flex absolute y-0 hover-transX pointer mb-10">
                    <h5 className="uppercase text-md font-bold mr-2">
                      Learn More
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
                className="relative verizon"
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

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
