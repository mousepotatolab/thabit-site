import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { useAnimation, motion } from "framer-motion";

import SuccessLayout from "@/components/successLayout";

import { useRouter } from "next/router";

import bit from "../public/8bitLogoBlack.svg";
import aliens from "../public/aliens.svg";
import fourth from "../public/fourth.svg";
import third from "../public/third.svg";

export default function Campaign() {
  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Campaign</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | Campaign" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta property="og:url" content="https://www.mousepotato.co/campaign" />
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
        <div className="py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // animate={{ x: 100, y: -100 }}
          >
            <Image src={bit} width={106} alt="mouse potato lab logo"></Image>
          </motion.div>
        </div>
        <section id="your-team">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex w-full justify-between mb-20 mobile-wrap">
              <div className="bg-campaign-grey p-campaign w-full">
                <div className="flex mobile-wrap justify-between items-center mb-10">
                  <h1 className="text-3xl uppercase max-660 mobile-mb-20">
                    hire us as your team and save $100,000 a year
                  </h1>
                  <Link href="/contact">
                    <button className="button-campaign mobile-mb-20">
                      I want to know more
                    </button>
                  </Link>
                </div>
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
                          Back-end Engineer
                        </h6>
                        <p className="text-md font-light text-primary mb-4 mw-280">
                          Backend team with one senior back-end engineer
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full mobile-wrap">
                      <div className="">
                        <h6 className="w-full text-md font-bold text-primary mb-2 mw-280">
                          Front-end Engineer
                        </h6>
                        <p className="w-full text-md font-light text-primary mb-4 mw-280">
                          Frontend team with one senior front-end engineer
                        </p>
                      </div>
                      <div className="">
                        <h6 className="text-md font-bold text-primary mb-2 mw-280 mobile-ml-0 ml-10">
                          Project Manager
                        </h6>
                        <p className="text-md font-light text-primary mb-4 mw-280 mobile-ml-0 ml-10">
                          Dedicated project manager to oversee agile development
                        </p>
                      </div>
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
                      src={aliens}
                      alt="illustration alien spaceships"
                    ></Image>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

Campaign.getLayout = function getLayout(page) {
  //   return <SuccessLayout>{page}</SuccessLayout>;
  return <SuccessLayout>{page}</SuccessLayout>;
};
