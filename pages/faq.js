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
                  At Thabit, we prioritize the privacy and security of both
                  charities' and contributors' information. To ensure a reliable
                  payment processing system, we have partnered with Plaid®.
                  Plaid® is a trusted and widely used platform, utilized by
                  renowned companies such as Acorns®, Venmo®, Chime®, Wise®,
                  Betterment®. 12,000+ financial institutions (USA, Canada,
                  Europe) use Plaid®. In the US, 1 in 4 US adults has connected
                  a financial account to an app or service powered by Plaid®. If
                  you would like to learn more about Plaid® and their robust
                  security measures, we encourage you to explore their website
                  for detailed information.
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
                  With your connected bank account, every purchase you make will
                  have its total rounded up to the next dollar. The spare change
                  resulting from this rounding will be donated to your selected
                  Islamic charitable cause. For instance, if you purchase a cup
                  of coffee for $4.75, we will round up the transaction to $5
                  and donate the spare change of $0.25. Similarly, if you buy
                  groceries for $78.10, we will round up the transaction to $79
                  and donate the spare change of $0.90. This way, your everyday
                  purchases contribute to your chosen Islamic charitable causes.
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
                  All your transactions will be rounded up on a weekly basis and
                  donated to your selected charity. Let's consider an example
                  with three transactions: $4.60, $150.93, and $71.95. From the
                  $4.60 transaction, we will collect $0.40; from the $150.93
                  transaction, we will collect $0.07, and from the $71.95
                  transaction, we will collect $0.05. Therefore, a total of
                  $0.52 will be collected from the transactions made during that
                  week, which will be donated to the charity. This process will
                  be repeated every week.
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
                  What happens to an exact change transaction?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  For exact change transactions, we implement rounding up to the
                  next full dollar amount. For instance, if your transaction
                  amounts to $5, we will round it up to $6 and collect an
                  additional $1 as a donation.
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
                  Does 100% of my donation go to the charity?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We utilize Plaid® and Stripe® for payment processing, and it's
                  important to note that a processing fee is applied to each
                  transfer made through their platform. Let's consider an
                  example: if you are donating $0.50, the processing fee is
                  $0.01 (2.9% of the donation amount). As a result, the charity
                  will receive $0.49 after deducting the processing fee.
                  However, if you choose to opt-in and pay for the transaction
                  fee yourself, the entire donation amount will go directly to
                  the charity without any deductions. This way, if you cover the
                  transaction fee, the charity will receive 100% of your
                  intended donation.
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
                  My Masjid/Charity is not on Thabit
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  If you are the authorized person, we kindly request you to
                  visit{" "}
                  <a
                    href="https://org.thabit.app"
                    target="_blank"
                    className="text-red"
                  >
                    org.thabit.app
                  </a>{" "}
                  and sign up your Masjid/charity. This will allow you to
                  register and provide necessary information for your
                  organization's participation. If you are not the authorized
                  person, we encourage you to share information about Thabit
                  with the Imam or the responsible individual at your
                  organization, so they can explore the opportunity and sign up
                  accordingly.
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
                  Can I support more than one Organization?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Right now you can only support one Masjid or Charity. In the
                  future we will add the option to support multiple Islamic
                  Organizations.
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
