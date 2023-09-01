import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "framer-motion";
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
        <title>Thabit App | Donate Spare Change</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7R5MPQY7KM"
        />

        <meta property="og:title" content="Thabit App | Privacy Policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta
          property="og:url"
          content="https://www.thabit.app/privacy-policy"
        />
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
              })(window, document, "clarity", "script", "hith533g22");
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7R5MPQY7KM', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <main className="container m-auto mb-30" ref={ref}>
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
            Frequently Asked
            <span className="text-red-gradient animate-text-gradient">
              {" "}
              Questions
            </span>
          </h2>
          <Accordion
            allowMultipleExpanded
            allowZeroExpanded={true}
            preExpanded={[]}
          >
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        1.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  How do I know my information is secure?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Islamic Organizations’ and all contributors’ information are
                  private and secure. Thabit uses Plaid® for payment processing.
                  Plaid® is used by popular companies like Venmo®, Chime®,
                  Wise®, Betterment®. 12,000+ financial institutions (USA,
                  Canada, Europe) use Plaid®. In the US, 1 in 4 US adults has
                  connected a financial account to an app or service powered by
                  Plaid®. If you would like to learn more about Plaid® and their
                  robust security measures, we encourage you to explore their
                  website for detailed information. Learn more about Plaid®
                  here.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        2.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  How much will I be donating?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Every purchase your make with you connected bank account,
                  we'll round up your purchases to the next dollar and donate
                  your spare change. For example, if you buy a cup of coffee for
                  $4.75, we will round up the transaction to $5 and donate $0.25
                  to your selected Masjid. Or if you buy groceries for $78.10,
                  we will round up the transaction to $79 and donate $0.90 to
                  your selected Masjid.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        3.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  When does the round up happen?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  All your transactions will be rounded up once a week and
                  donated to your selected Masjid. For example, if you made 3
                  transactions of $4.60, $150.93 and $71.95. We will collect
                  $0.40 from the $4.60 transaction, $0.07 from the $150.93
                  transaction, and $0.05 from the $71.95 transaction. So the
                  total of $0.52 will be collected from that week’s transactions
                  and donated to the Masjid. This process will continue each
                  week. If you don’t have enough balance the transaction will
                  decline.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        4.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  Does 100% of my donation go to the charity?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We use Plaid for payment processing. For each transfer payment
                  processing fee is applied by Plaid. For example, if you are
                  donating $0.50 then the processing fee is $0.01 (2.9%). So the
                  Masjid will get $0.49. If you opt-in to pay for the
                  transaction fee then 100% of your donation will go to the
                  Masjid.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        5.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  My local Masjid is not on Thabit
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  If you are the authorized person, please visit{" "}
                  <a
                    href="https://org.thabit.app"
                    target="_blank"
                    className="text-red"
                  >
                    this link
                  </a>{" "}
                  and sign up your Masjid. If not then please share Thabit with
                  the Imam of your Masjid.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        6.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  Can I support more than one Masjid?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Right now you can only support one Masjid. In the future we
                  will add the option to support multiple Islamic Organizations.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      <span className="text-red-gradient animate-text-gradient">
                        7.
                      </span>
                    </h2>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <Image
                          src={arrow}
                          alt="join thabit telegram"
                          className={`pointer arrow ${
                            expanded ? "rotated" : ""
                          }`}
                          width={24}
                        />
                      )}
                    </AccordionItemState>
                  </div>
                  Can I support other Islamic institutes like charity
                  organization?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Right now you can only support Islamic Organizations. But in
                  the future we will add other Islamic organizations that can
                  benefit from our platform.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </main>
    </>
  );
}

Faq.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
