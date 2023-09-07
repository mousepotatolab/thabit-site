import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "framer-motion";
import Script from "next/script";
// import { useInView } from "react-intersection-observer";

import Layout from "../components/layout";

import Head from "next/head";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Images

import arrow from "../public/arrow-up.svg";
import phone from "../public/thabit-phone.png";
import phoneGif from "../public/sign-in.gif";
import group from "../public/group-thabit.png";
import grocery from "../public/grocery-store.png";
import gas from "../public/gas-station.png";
import coffee from "../public/cofee-shop.png";
import contribution from "../public/contribution.png";
import plaid from "../public/plaid-connect.png";
import organization from "../public/organization.png";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Head>
        <title>Thabit App | Frequently Asked Questions</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R5MPQY7KM"
        />

        <meta
          property="og:title"
          content="Thabit App | Frequently Asked Questions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta property="og:url" content="https://www.thabit.app/faq" />
        <meta
          property="og:image"
          content="https://imagedelivery.net/reln_0zNmr7GUlRvuYhFXw/a076aa93-3fdc-4086-3169-8376e5725000/public"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "hith533g22");
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,v3){
              w.chaportConfig = {
                appId : '63c8b0ffdff47c90c3dcb94a'
              };

              if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)
            })(window, document);
            `,
          }}
        />
      </Head>
      <main className="container m-auto mb-30" ref={ref}>
        <section id="help">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <h2 className="text-title font-bold text-center text-primary mb-20 max-844 m-auto">
              Help <br />
              <span className="text-red-gradient animate-text-gradient">
                {" "}
                Page
              </span>
            </h2>

            <div className="flex w-full justify-between mobile-wrap">
              <Link href="/faq" className="mobile-mb-sm">
                <div className="help-card bg-secondary p-10 w-full">
                  <h3 className="text-title text-green-gradient mb-6">1.</h3>
                  <h5 className="text-2xl mb-6">FAQ</h5>
                  <p className="text-lg text-grey-light">
                    Head to our FAQ section to see if your question has already
                    been answered.
                  </p>
                </div>
              </Link>
              <Link href="https://t.me/thabitdiscuss" className="mobile-mb-sm">
                <div className="help-card bg-secondary p-10 w-full">
                  <h3 className="text-title text-yellow-gradient mb-6">2.</h3>
                  <h5 className="text-2xl mb-6">Forum</h5>
                  <p className="text-lg text-grey-light">
                    Join Thabit forum and ask a question there.
                  </p>
                </div>
              </Link>
              <a
                href="#"
                onclick="window.chaport.q('open'); return false;"
                className="mobile-mb-sm"
              >
                <div className="help-card bg-secondary p-10 w-full">
                  <h3 className="text-title text-green-blue-gradient mb-6">
                    3.
                  </h3>
                  <h5 className="text-2xl mb-6">Chat</h5>
                  <p className="text-lg text-grey-light">
                    Get live help or drop a message and we will get back to you
                    within 48 hours.
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

Faq.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
