import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import Layout from "../components/layout";

import Head from "next/head";
import Image from "next/image";

// import styles from "@/styles/Home.module.css";

// Images

import telegram from "../public/join-telegram.png";
import phone from "../public/thabit-phone.png";
import phoneGif from "../public/sign-in.gif";
import group from "../public/automate.svg";
import grocery from "../public/grocery-store.png";
import gas from "../public/gas-station.png";
import coffee from "../public/cofee-shop.png";
import contribution from "../public/contribution.png";
import plaid from "../public/plaid-connect.png";
import organization from "../public/organization.png";

export default function Home() {
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

        <meta property="og:title" content="Thabit App | Donate Spare Change" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We created Thabit to help local Masjids and Islamic Organizations and allow our community to engage in sadaqah. Thabit works by connecting users' bank accounts, rounding up their purchases to the nearest dollar, and donating the difference to the Masjid or Islamic Organization of their choice."
        />
        <meta property="og:url" content="https://www.thabit.app" />
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
      <main className="container m-auto" ref={ref}>
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
          <h1 className="text-title text-center font-bold m-auto text-primary mb-6">
            Sadaqah Jariyah <br></br>
            <span className="text-green-gradient animate-text-gradient">
              On Everyday Spending.
            </span>
          </h1>
        </motion.div>
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
          <h6 className="text-lg text-primary font-semibold text-center mb-12">
            A cup of tea for $2.75 becomes a $0.25 Sadaqah.
          </h6>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mw-280 m-auto mb-4"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <a href="https://t.me/thabitapp" target="_blank">
            <Image
              src={telegram}
              alt="join thabit telegram"
              width={271}
            ></Image>
          </a>
        </motion.div>
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
          <h6 className="text-xs text-grey-light font-light text-center mb-30">
            Telegram Channel keeps your info private
          </h6>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mw-300 m-auto relative mb-30"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div className="overlay"></div>
          <Image src={phone} alt="join thabit telegram" width={300}></Image>
          <Image
            src={coffee}
            alt="join thabit telegram"
            className="absolute coffee"
            width={300}
          ></Image>
          <Image
            src={gas}
            alt="join thabit telegram"
            className="absolute gas"
            width={300}
          ></Image>
          <Image
            src={grocery}
            alt="join thabit telegram"
            className="absolute groceries "
            width={300}
          ></Image>
        </motion.div>
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
          <h2 className="text-title text-center font-bold m-auto text-primary mb-6">
            A Coin Jar For <br></br>
            <span className="text-red-gradient animate-text-gradient">
              The Entire Ummah.
            </span>
          </h2>
        </motion.div>
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
          <h6 className="text-lg text-primary font-semibold text-center mb-30 mw-525 m-auto">
            Donate spare change. Small contributions add up to make a big
            impact.
          </h6>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mw-300 m-auto mb-30 relative"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div className="overlay"></div>
          <Image src={phone} alt="join thabit telegram" width={300}></Image>
          <Image
            src={contribution}
            alt="join thabit telegram"
            className="absolute coffee"
            width={300}
          ></Image>
        </motion.div>
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
          <h2 className="text-title text-center font-bold m-auto text-primary mb-6">
            Allah Loves <br></br>
            <span className="text-yellow-gradient animate-text-gradient">
              Small But Consistent Deeds.
            </span>
          </h2>
        </motion.div>
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
          <h6 className="text-lg text-primary font-semibold text-center mb-30 m-auto mw-618">
            “The most beloved of deeds to Allah are those{" "}
            <br className="mobile-none" /> that are most consistent, even if it
            is small.” (Bukhari)
          </h6>
        </motion.div>
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
          <h2 className="text-title text-center font-bold m-auto text-primary mb-6">
            How It
            <span className="text-green-gradient animate-text-gradient">
              {" "}
              Works
            </span>
          </h2>
        </motion.div>
        <section id="about-us">
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
            <div className="w-full pt-12 ">
              <div className="flex justify-between mobile-wrap">
                <div className="mw-618">
                  <h2 className="text-title-secondary font-bold  text-primary mb-6 mt-10">
                    Securely
                    <span className="text-green-blue-gradient animate-text-gradient">
                      {" "}
                      Connect <br></br> Bank <br className="mobile-block" />{" "}
                      Account.
                    </span>
                  </h2>
                  <p className="text-lg font-light mobile-text-center mobile-mb-med">
                    12,000+ financial institutions use Plaid®. In the US, 1 in 4
                    US adults has connected a financial account to an app or
                    service powered by Plaid®.
                  </p>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className=" mb-30 relative mobile-works mobile-m-0"
                >
                  <div className="overlay"></div>
                  <Image
                    src={phone}
                    alt="join thabit telegram"
                    width={300}
                  ></Image>
                  <Image
                    src={plaid}
                    alt="join thabit telegram"
                    className="absolute plaid-connect"
                    width={360}
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
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
            <div className="w-full pt-12">
              <div className="flex justify-between mobile-wrap-reverse">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className=" mb-30 relative mobile-works mobile-m-0"
                >
                  <div className="overlay"></div>
                  <Image
                    src={phone}
                    alt="join thabit telegram"
                    width={300}
                  ></Image>
                  <Image
                    src={organization}
                    alt="join thabit telegram"
                    className="absolute organization"
                    width={360}
                  ></Image>
                </motion.div>
                <div className="mw-618">
                  <h2 className="text-title-secondary font-bold  text-primary mb-6 mt-10">
                    Choose An
                    <span className="text-green-blue-gradient animate-text-gradient">
                      {" "}
                      Islamic <br></br> Organization.
                    </span>
                  </h2>
                  <p className="text-lg font-light mobile-text-center mobile-mb-med">
                    From our list of charity organizations, select an
                    organization or your local Masjid that you want to support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
            <div className="w-full pt-12 ">
              <div className="flex justify-between mobile-wrap">
                <div className="mw-618">
                  <h2 className="text-title-secondary font-bold  text-primary mb-6 mt-10">
                    Keep <br></br>
                    <span className="text-green-blue-gradient animate-text-gradient">
                      {" "}
                      Spending<br></br> Normally.
                    </span>
                  </h2>
                  <p className="text-lg font-light mobile-text-center mobile-mb-med">
                    Continue using the bank account or the debit card associated
                    with the account like you usually do in your daily life.
                  </p>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className=" mb-30 relative mobile-works mobile-m-0"
                >
                  <div className="overlay"></div>
                  <Image
                    src={phone}
                    alt="join thabit telegram"
                    width={300}
                  ></Image>
                  <Image
                    src={coffee}
                    alt="join thabit telegram"
                    className="absolute coffee coffee-two"
                    width={300}
                  ></Image>
                  <Image
                    src={gas}
                    alt="join thabit telegram"
                    className="absolute gas coffee-two"
                    width={300}
                  ></Image>
                  <Image
                    src={grocery}
                    alt="join thabit telegram"
                    className="absolute groceries  coffee-two"
                    width={300}
                  ></Image>
                </motion.div>
              </div>
            </div>
          </motion.div>
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
            <div className="w-full pt-12">
              <div className="flex justify-between mobile-wrap-reverse">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-20 relative mobile-works"
                >
                  <div className="overlay"></div>
                  <Image
                    src={phone}
                    alt="join thabit telegram"
                    width={300}
                  ></Image>
                  <Image
                    src={contribution}
                    alt="join thabit telegram"
                    className="absolute coffee coffee-two"
                    width={300}
                  ></Image>
                </motion.div>
                <div className="mw-618">
                  <h2 className="text-title-secondary font-bold  text-primary mb-6 mt-10">
                    Donate <br></br>
                    <span className="text-green-blue-gradient animate-text-gradient">
                      {" "}
                      Spare Change <br></br> Automatically.
                    </span>
                  </h2>
                  <p className="text-lg font-light mobile-text-center mobile-mb-med">
                    Once a week we'll round up your day to day purchases to the
                    next dollar and collect spare change to donate to your
                    selected organization or Masjid.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="example">
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
            <h2 className="text-title text-center font-bold m-auto text-primary mb-20">
              Here Is An
              <span className="text-red-gradient animate-text-gradient">
                {" "}
                Example.
              </span>
            </h2>
          </motion.div>
          <div className="w-full flex mb-30 mobile-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary w-full p-10 flex col mr-4 mobile-mb-med"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 80 },
              }}
            >
              <h2 className="text-title font-bold text-primary mb-6">
                <span className="text-green-gradient animate-text-gradient">
                  1.
                </span>
              </h2>
              <h5 className="text-2xl mb-6">Connect</h5>
              <p className="text-grey-light text-lg mw-200">
                <span className="text-red">Musa</span> <br /> downloaded Thabit
                app and securely connected his bank account to support his local
                Masjid.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary w-full p-10 flex col mr-4 mobile-mb-med"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 80 },
              }}
            >
              <h2 className="text-title font-bold text-primary mb-6">
                <span className="text-yellow-gradient animate-text-gradient">
                  2.
                </span>
              </h2>
              <h5 className="text-2xl mb-6">Spend</h5>
              <p className="text-grey-light text-lg mw-200">
                This week he made two purchases. He bought coffee for{" "}
                <span className="text-red">$5.75</span> and groceries for{" "}
                <span className="text-red">$150.95</span>.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary w-full p-10 flex col mr-4 mobile-mb-med"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 80 },
              }}
            >
              <h2 className="text-title font-bold text-primary mb-6">
                <span className="text-green-blue-gradient animate-text-gradient">
                  3.
                </span>
              </h2>
              <h5 className="text-2xl mb-6">Round Up</h5>
              <p className="text-grey-light text-lg mw-200">
                On friday Thabit rounded up those two transactions and collected{" "}
                <span className="text-red">$0.25</span> from $5.75 and{" "}
                <span className="text-red">$0.05</span> from $150.95.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary w-full p-10 flex col "
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 80 },
              }}
            >
              <h2 className="text-title font-bold text-primary mb-6">
                <span className="text-red-gradient animate-text-gradient">
                  4.
                </span>
              </h2>
              <h5 className="text-2xl mb-6">Donate</h5>
              <p className="text-grey-light text-lg mw-200">
                Once the total collection of spare change reaches minimum of{" "}
                <span className="text-red">$5</span>, Thabit will automatically
                donate to Musa’s local Masjid.
              </p>
            </motion.div>
          </div>
        </section>
        <section id="automate">
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
            <h2 className="text-title text-center font-bold m-auto text-primary mb-6">
              Automate <br></br>
              <span className="text-green-gradient animate-text-gradient">
                Small But Continuous Charity.
              </span>
            </h2>
          </motion.div>
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
            <h6 className="text-lg text-primary font-semibold text-center mb-30 mw-730 m-auto">
              In Islamic history, we never had the opportunity to do sadaqah
              even while we grab a cup of coffee or buy groceries.
            </h6>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" mb-30 relative mw-300 m-auto mobile-works mobile-m-0"
          >
            <div className="overlay"></div>
            <Image src={phone} alt="join thabit telegram" width={300}></Image>
            <Image
              src={group}
              alt="join thabit telegram"
              className="absolute coffee coffee-two"
              width={300}
            ></Image>
          </motion.div>

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
            <h2 className="text-title text-center font-bold m-auto text-primary mb-6">
              Invest In <br></br>
              <span className="text-pink-gradient animate-text-gradient">
                Your <br className="mobile-block" /> Akhira.
              </span>
            </h2>
          </motion.div>
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
            <h6 className="text-lg text-primary font-semibold text-center mb-6 mw-525 m-auto">
              “You will never attain righteousness until you spend in charity
              from that what you love.”
            </h6>
            <h6 className="text-lg text-primary font-semibold text-center mb-12 mw-525 m-auto">
              Quran 3:92
            </h6>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mw-280 m-auto mb-4"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <a href="https://t.me/thabitapp" target="_blank">
              <Image
                src={telegram}
                alt="join thabit telegram"
                width={271}
              ></Image>
            </a>
          </motion.div>
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
            <h6 className="text-xs text-grey-light font-light text-center mb-30">
              Telegram Channel keeps your info private
            </h6>
          </motion.div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
