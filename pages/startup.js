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
import puzzle from "../public/puzzle.svg";

export default function Startup() {
  return (
    <>
      <Head>
        <title>Mouse Potato Lab | Startup</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZB4BX6WH03"
        />
        <meta property="og:title" content="Mouse Potato Lab | Startup" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mouse Potato Lab is a minimalistic, early-stage startup-friendly design and development studio run by a bunch of big kids with a love for design and coding! We love to solve complex problems. We design, and develop, human-centered, modern, and beautiful products!"
        />
        <meta property="og:url" content="https://www.mousepotato.co/startup" />
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
                    Build and Launch your MVP in 3 months
                  </h1>
                  <Link href="/schedule">
                    <button className="button-startup mobile-mb-20">
                      book a free UX workshop
                    </button>
                  </Link>
                </div>
                <div className="flex justify-between mobile-wrap">
                  <div className="w-full">
                    <h5 className="text-lg font-bold text-primary mb-2">
                      Estimated Project Cost *
                    </h5>

                    <div className="flex items-center mb-10">
                      <h6 className="text-2xl font-bold text-primary mr-1">
                        $35,000
                      </h6>
                    </div>
                    <div className="flex w-full mobile-wrap">
                      <div>
                        <h6 className="text-md font-bold text-primary mb-2 mw-280">
                          What we will do
                        </h6>
                        <ol className="list-startup mb-4">
                          <li className="text-md mb-2 font-regular">
                            UX workshop to find a solution and identify MVP
                            features
                          </li>
                          <li className="text-md mb-2 font-regular">
                            UI Design
                          </li>
                          <li className="text-md mb-2 font-regular">
                            Frontend and Backend Development
                          </li>
                          <li className="text-md font-regular">
                            Product Launch
                          </li>
                        </ol>
                        <h6 className="text-xs font-light">
                          * Final product cost will determine after the MVP
                          features are identified
                        </h6>
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
                      src={puzzle}
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

Startup.getLayout = function getLayout(page) {
  //   return <SuccessLayout>{page}</SuccessLayout>;
  return <SuccessLayout>{page}</SuccessLayout>;
};
